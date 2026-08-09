// Vercel serverless function: turns a page comment into a GitHub issue.
//
// Required environment variable (set in Vercel → Project → Settings → Env Vars):
//   GITHUB_TOKEN  A GitHub token with "Issues: read & write" on the repo.
// Optional:
//   REPO          owner/repo (defaults to foundernexus/fn-signup-no-li)
//   PASSCODE      if set, the widget must send this same value
//   ALLOW_ORIGIN  allowed browser origin (defaults to the GitHub Pages site)

export default async function handler(req, res) {
  const ORIGIN = process.env.ALLOW_ORIGIN || "https://foundernexus.github.io";
  res.setHeader("Access-Control-Allow-Origin", ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  try {
    const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});

    if (process.env.PASSCODE && b.passcode !== process.env.PASSCODE) {
      return res.status(401).json({ error: "bad passcode" });
    }

    const note = (b.note || "").toString().trim();
    if (!note) return res.status(400).json({ error: "empty comment" });

    const token = process.env.GITHUB_TOKEN;
    if (!token) return res.status(500).json({ error: "missing GITHUB_TOKEN" });
    const repo = process.env.REPO || "foundernexus/fn-signup-no-li";

    const page = (b.page || "Page").toString().replace(/\s*·.*$/, "");
    const title = "[Feedback] " + page + ": " + (note.slice(0, 60) || (b.snippet || "").slice(0, 60));
    const body = [
      "**Comment:** " + note, "",
      "**From:** " + (b.name || "anonymous"),
      "**Page:** " + (b.url || ""),
      "**Element:** `" + (b.selector || "") + "`",
      b.snippet ? "**Text:** " + b.snippet : "",
      "**Viewport:** " + (b.viewport || ""),
      "**Time:** " + (b.ts || new Date().toISOString()),
      "", "_Filed from the on-page comment widget._"
    ].filter(Boolean).join("\n");

    async function createIssue(withLabels) {
      const payload = { title, body };
      if (withLabels) payload.labels = ["page-feedback"];
      return fetch("https://api.github.com/repos/" + repo + "/issues", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + token,
          "Accept": "application/vnd.github+json",
          "Content-Type": "application/json",
          "User-Agent": "fn-comment-widget"
        },
        body: JSON.stringify(payload)
      });
    }

    let gh = await createIssue(true);
    if (gh.status === 422) gh = await createIssue(false); // label may not exist yet
    const data = await gh.json();
    if (!gh.ok) return res.status(502).json({ error: data.message || "github error" });

    return res.status(200).json({ url: data.html_url, number: data.number });
  } catch (e) {
    return res.status(500).json({ error: String((e && e.message) || e) });
  }
}
