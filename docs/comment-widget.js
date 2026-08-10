/* FounderNexus page-comment widget
 * Lets a teammate click any element on the page, leave a note, and file a
 * trackable GitHub issue. When CONFIG.endpoint is set to your backend URL,
 * finishing a comment creates the issue automatically. Until then, it falls
 * back to opening a pre-filled GitHub "New issue" page so it works today.
 */
(function () {
  "use strict";

  var CONFIG = {
    endpoint: "https://fn-signup-no-li.vercel.app/api/comment",  // Vercel backend
    passcode: "foundernexus",                  // shared passcode required by the backend
    repo: "foundernexus/fn-signup-no-li",      // owner/repo for the fallback issue link
    label: "page-feedback"
  };

  var NAVY = "#01052A", BLUE = "#007BE4", LINE = "#E2E8F0", INK = "#01052A", MUT = "#56646F";
  var Z = 2147483000;
  var state = { picking: false, target: null };

  // ---- helpers ---------------------------------------------------------------
  function el(tag, styles, props) {
    var n = document.createElement(tag);
    if (styles) n.setAttribute("style", styles);
    if (props) Object.keys(props).forEach(function (k) { n[k] = props[k]; });
    return n;
  }
  function esc(s) {
    return (s == null ? "" : String(s)).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function cssPath(node) {
    if (!node || node.nodeType !== 1 || node === document.body) return "body";
    if (node.id) return "#" + (window.CSS && CSS.escape ? CSS.escape(node.id) : node.id);
    var parts = [], cur = node, guard = 0;
    while (cur && cur.nodeType === 1 && cur !== document.body && guard++ < 5) {
      var sel = cur.tagName.toLowerCase();
      if (cur.classList && cur.classList.length) {
        sel += "." + [].slice.call(cur.classList, 0, 2).map(function (c) {
          return window.CSS && CSS.escape ? CSS.escape(c) : c;
        }).join(".");
      }
      var p = cur.parentElement;
      if (p) {
        var sibs = [].filter.call(p.children, function (c) { return c.tagName === cur.tagName; });
        if (sibs.length > 1) sel += ":nth-of-type(" + (sibs.indexOf(cur) + 1) + ")";
      }
      parts.unshift(sel);
      cur = cur.parentElement;
    }
    return parts.join(" > ");
  }

  // ---- launcher button -------------------------------------------------------
  var btn = el("button", [
    "position:fixed;right:18px;bottom:18px;z-index:" + Z + ";",
    "display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 18px;",
    "background:" + BLUE + ";color:#fff;border:none;border-radius:9999px;cursor:pointer;",
    "font:600 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;",
    "box-shadow:0 6px 20px rgba(1,5,42,.28);"
  ].join(""), { type: "button", textContent: "💬 Comment" });
  btn.addEventListener("mouseenter", function () { btn.style.background = "#0072BA"; });
  btn.addEventListener("mouseleave", function () { btn.style.background = BLUE; });
  btn.addEventListener("click", startPicking);

  // ---- pick mode -------------------------------------------------------------
  var hint = el("div", [
    "position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:" + Z + ";",
    "background:" + NAVY + ";color:#fff;padding:10px 16px;border-radius:9999px;",
    "font:600 13px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;",
    "box-shadow:0 6px 20px rgba(1,5,42,.28);display:none;"
  ].join(""), { textContent: "Click anything on the page to comment on it — or press Esc" });

  var ring = el("div", "position:fixed;z-index:" + (Z - 1) + ";pointer-events:none;border:2px solid " +
    BLUE + ";border-radius:6px;background:rgba(0,123,228,.12);display:none;");

  function moveRing(t) {
    if (!t || !t.getBoundingClientRect) { ring.style.display = "none"; return; }
    var r = t.getBoundingClientRect();
    ring.style.display = "block";
    ring.style.left = r.left + "px"; ring.style.top = r.top + "px";
    ring.style.width = r.width + "px"; ring.style.height = r.height + "px";
  }
  function onMove(e) {
    if (!state.picking) return;
    var t = e.target;
    if (t === hint || t === btn || t === ring) return;
    state.target = t; moveRing(t);
  }
  function onPick(e) {
    if (!state.picking) return;
    if (e.target === btn) return;
    e.preventDefault(); e.stopPropagation();
    stopPicking();
    openPanel(state.target);
  }
  function onKey(e) { if (e.key === "Escape") { stopPicking(); closePanel(); } }

  function startPicking() {
    state.picking = true; hint.style.display = "block"; btn.style.display = "none";
    document.addEventListener("mousemove", onMove, true);
    document.addEventListener("click", onPick, true);
    document.addEventListener("keydown", onKey, true);
  }
  function stopPicking() {
    state.picking = false; hint.style.display = "none"; ring.style.display = "none";
    btn.style.display = "inline-flex";
    document.removeEventListener("mousemove", onMove, true);
    document.removeEventListener("click", onPick, true);
  }

  // ---- comment panel ---------------------------------------------------------
  var overlay = null;
  function closePanel() { if (overlay) { overlay.remove(); overlay = null; } document.removeEventListener("keydown", onKey, true); }

  function openPanel(target) {
    var selector = cssPath(target);
    var snippet = (target && target.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);

    overlay = el("div", "position:fixed;inset:0;z-index:" + (Z + 1) + ";background:rgba(1,5,42,.45);" +
      "display:flex;align-items:center;justify-content:center;padding:24px;");
    var card = el("div", [
      "width:100%;max-width:440px;background:#fff;border-radius:16px;padding:24px;",
      "box-shadow:0 16px 40px rgba(1,5,42,.28);",
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:" + INK + ";"
    ].join(""));

    var name = localStorage.getItem("fn_commenter") || "";
    card.innerHTML =
      '<div style="font:700 18px/1.2 inherit;margin-bottom:4px;">Leave a comment</div>' +
      '<div style="font:400 13px/1.5 inherit;color:' + MUT + ';margin-bottom:16px;overflow-wrap:anywhere;">On: <code>' +
        esc(snippet || selector) + '</code></div>' +
      '<label style="display:block;font:600 12px/1 inherit;margin-bottom:6px;">Your name</label>' +
      '<input id="fnc-name" value="' + esc(name).replace(/"/g, "&quot;") + '" placeholder="First name" ' +
        'style="width:100%;box-sizing:border-box;height:40px;padding:0 12px;border:1px solid ' + LINE +
        ';border-radius:8px;font:400 15px inherit;margin-bottom:14px;outline:none;">' +
      '<label style="display:block;font:600 12px/1 inherit;margin-bottom:6px;">What should change here?</label>' +
      '<textarea id="fnc-note" placeholder="Describe the change or problem…" ' +
        'style="width:100%;box-sizing:border-box;min-height:96px;resize:vertical;padding:10px 12px;border:1px solid ' +
        LINE + ';border-radius:8px;font:400 15px/1.5 inherit;outline:none;"></textarea>' +
      '<div id="fnc-msg" style="font:500 13px/1.5 inherit;color:' + MUT + ';margin-top:10px;display:none;"></div>' +
      '<div style="display:flex;justify-content:flex-end;gap:10px;margin-top:18px;">' +
        '<button id="fnc-cancel" type="button" style="height:40px;padding:0 16px;border:1px solid ' + LINE +
          ';background:#fff;border-radius:8px;font:600 14px inherit;cursor:pointer;">Cancel</button>' +
        '<button id="fnc-send" type="button" style="height:40px;padding:0 18px;border:none;background:' + BLUE +
          ';color:#fff;border-radius:8px;font:600 14px inherit;cursor:pointer;">Create issue</button>' +
      '</div>';

    overlay.appendChild(card);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closePanel(); });
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKey, true);
    card.querySelector("#fnc-note").focus();
    card.querySelector("#fnc-cancel").addEventListener("click", closePanel);
    card.querySelector("#fnc-send").addEventListener("click", function () {
      submit({
        selector: selector,
        snippet: snippet,
        note: card.querySelector("#fnc-note").value.trim(),
        name: card.querySelector("#fnc-name").value.trim(),
        card: card
      });
    });
  }

  function msg(card, text, color) {
    var m = card.querySelector("#fnc-msg");
    m.style.display = "block"; m.style.color = color || MUT; m.innerHTML = text;
  }

  function payload(d) {
    return {
      page: document.title || location.pathname,
      url: location.href,
      selector: d.selector,
      snippet: d.snippet,
      note: d.note,
      name: d.name || "anonymous",
      viewport: window.innerWidth + "x" + window.innerHeight,
      ts: new Date().toISOString(),
      passcode: CONFIG.passcode || undefined
    };
  }

  function issueTitle(p) {
    var page = (p.page || "Page").replace(/\s*·.*$/, "");
    return "[Feedback] " + page + ": " + (p.note.slice(0, 60) || p.snippet.slice(0, 60));
  }
  function issueBody(p) {
    return "**Comment:** " + p.note + "\n\n" +
      "**From:** " + p.name + "\n" +
      "**Page:** " + p.url + "\n" +
      "**Element:** `" + p.selector + "`\n" +
      (p.snippet ? "**Text:** " + p.snippet + "\n" : "") +
      "**Viewport:** " + p.viewport + "\n" +
      "**Time:** " + p.ts + "\n\n" +
      "_Filed from the on-page comment widget._";
  }

  function submit(d) {
    if (!d.note) { msg(d.card, "Please write a comment first.", "#B42318"); return; }
    if (d.name) localStorage.setItem("fn_commenter", d.name);
    var p = payload(d);
    var send = d.card.querySelector("#fnc-send");
    send.disabled = true; send.textContent = "Sending…";

    if (CONFIG.endpoint) {
      fetch(CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p)
      }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok && res.j && res.j.url) {
            msg(d.card, "Issue created ✓ &nbsp;<a href='" + res.j.url + "' target='_blank' style='color:" + BLUE + "'>view #" + (res.j.number || "") + "</a>", "#067647");
            send.textContent = "Done"; setTimeout(closePanel, 2500);
          } else {
            throw new Error((res.j && res.j.error) || "backend error");
          }
        }).catch(function () {
          fallback(d, p);
          send.disabled = false; send.textContent = "Create issue";
        });
    } else {
      fallback(d, p);
      send.disabled = false; send.textContent = "Create issue";
    }
  }

  // Until the backend is connected: open a pre-filled GitHub new-issue page.
  function fallback(d, p) {
    var url = "https://github.com/" + CONFIG.repo + "/issues/new?title=" +
      encodeURIComponent(issueTitle(p)) + "&body=" + encodeURIComponent(issueBody(p)) +
      "&labels=" + encodeURIComponent(CONFIG.label);
    msg(d.card, "Opening GitHub to file this issue… &nbsp;<a href='" + url + "' target='_blank' style='color:" +
      BLUE + "'>click here if it doesn't open</a>", MUT);
    window.open(url, "_blank");
  }

  // ---- mount -----------------------------------------------------------------
  function mount() { document.body.appendChild(btn); document.body.appendChild(hint); document.body.appendChild(ring); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
