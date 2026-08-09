/* @ds-bundle: {"format":3,"namespace":"FounderNexusDesignSystem_c60151","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"EventCard","sourcePath":"components/data-display/EventCard.jsx"},{"name":"SpeakerCard","sourcePath":"components/data-display/SpeakerCard.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Steps","sourcePath":"components/feedback/Steps.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"abb3b710b193","components/core/Avatar.jsx":"45c81b082e8a","components/core/Badge.jsx":"6848368d96bf","components/core/Button.jsx":"43fc1006e801","components/core/Chip.jsx":"9c7b9c44a64c","components/core/IconButton.jsx":"9619554f23fa","components/data-display/Card.jsx":"f0b4807638f2","components/data-display/EventCard.jsx":"c15b402b9021","components/data-display/SpeakerCard.jsx":"c7041541ed2f","components/data-display/StatCard.jsx":"144d57c0336e","components/data-display/Table.jsx":"3172a2231aac","components/feedback/Dialog.jsx":"2f95ced449b4","components/feedback/ProgressBar.jsx":"3131cc7d3b78","components/feedback/Steps.jsx":"21db5e39c70b","components/feedback/Tooltip.jsx":"4f176041388c","components/forms/Checkbox.jsx":"295f3de67de6","components/forms/FormField.jsx":"d843447e33f0","components/forms/Input.jsx":"f8e03cc41ec6","components/forms/Radio.jsx":"f497d26c70a4","components/forms/Select.jsx":"69af48e48e64","components/forms/Switch.jsx":"12783b7bf8db","components/icon/Icon.jsx":"f14ff182a881","components/navigation/Breadcrumb.jsx":"71160e5c6e5b","components/navigation/SidebarNav.jsx":"915e50fdf46a","components/navigation/SiteHeader.jsx":"b84d029e389e","components/navigation/Tabs.jsx":"ebbb1573fda3","ui_kits/insights/Insights.jsx":"81de593c1795","ui_kits/marketing/Landing.jsx":"d14f8a8bda52","ui_kits/member-area/MemberApp.jsx":"8f6463a2d85b","ui_kits/stories/Stories.jsx":"71eb19779027"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FounderNexusDesignSystem_c60151 = window.FounderNexusDesignSystem_c60151 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Logo — official wordmark or square mark.
   Uses verified extracted assets only. `base` points at the assets/logos dir. */

function Logo({
  variant = "wordmark",
  height,
  base = "assets/logos",
  className = "",
  style = {},
  ...rest
}) {
  if (variant === "mark") {
    const h = height || 36;
    return /*#__PURE__*/React.createElement("img", _extends({
      src: `${base}/foundernexus-mark-square-20251025.jpeg`,
      alt: "FounderNexus",
      className: `fn-logo ${className}`,
      style: {
        height: h,
        width: h,
        objectFit: "contain",
        borderRadius: "var(--radius-sm)",
        ...style
      }
    }, rest));
  }
  const h = height || 32;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/foundernexus-wordmark-20260422.png`,
    alt: "FounderNexus",
    className: `fn-logo ${className}`,
    style: {
      height: h,
      width: "auto",
      objectFit: "contain",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Avatar — circular member/speaker image or initials. */

const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80
};
function initialsOf(name = "") {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || "?";
}
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  ring = false,
  className = "",
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const radius = square ? "var(--radius-md)" : "var(--radius-pill)";
  const fontSize = dim <= 32 ? 12 : dim <= 40 ? 14 : dim <= 56 ? 18 : 26;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `fn-avatar ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "none",
      overflow: "hidden",
      borderRadius: radius,
      background: src ? "var(--gray-100)" : "var(--navy-700)",
      color: "var(--white)",
      font: `var(--fw-semibold) ${fontSize}px/1 var(--font-sans)`,
      boxShadow: ring ? "0 0 0 2px var(--white), 0 0 0 4px var(--blue-200)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initialsOf(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Card — base surface. White or pale-blue, 1px border, modest radius. */

function Card({
  children,
  variant = "default",
  // default | accent | dark | flat
  padding = "lg",
  // none | sm | md | lg
  interactive = false,
  className = "",
  style = {},
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  }[padding];
  const surfaces = {
    default: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      color: "var(--navy-900)"
    },
    accent: {
      background: "var(--blue-50)",
      border: "1px solid var(--blue-200)",
      color: "var(--navy-900)"
    },
    dark: {
      background: "var(--navy-700)",
      border: "1px solid transparent",
      color: "var(--white)"
    },
    flat: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      color: "var(--navy-900)"
    }
  };
  const v = surfaces[variant] || surfaces.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `fn-card ${interactive ? "fn-card--interactive" : ""} ${className}`,
    style: {
      padding: pad,
      borderRadius: "var(--radius-lg)",
      boxShadow: variant === "flat" ? "none" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base)",
      ...v,
      ...style
    }
  }, rest), children, interactive && /*#__PURE__*/React.createElement("style", null, `.fn-card--interactive { cursor: pointer; }
        .fn-card--interactive:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }`));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
/* FounderNexus Table — dense, scannable admin/member data table.
   columns: [{ key, label, width, align, render }]. rows: array of objects. */

function Table({
  columns = [],
  rows = [],
  rowKey = "id",
  onRowClick,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-table-wrap ${className}`,
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--white)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "var(--text-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-50)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "11px 16px",
      width: c.width,
      font: "var(--fw-semibold) var(--fs-xs)/1.2 var(--font-sans)",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "var(--gray-600)",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i,
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    className: "fn-table-row",
    style: {
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
      cursor: onRowClick ? "pointer" : "default"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "13px 16px",
      color: "var(--navy-900)",
      verticalAlign: "middle"
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))), /*#__PURE__*/React.createElement("style", null, `.fn-table-row:hover { background: var(--gray-50); }`));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/* FounderNexus ProgressBar — completion meter (profile, application progress). */

function ProgressBar({
  value = 0,
  label,
  showValue = true,
  size = "md",
  className = "",
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = size === "sm" ? 6 : 8;
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-progress ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--text-label)",
      color: "var(--gray-700)"
    }
  }, label && /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy-900)"
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: "var(--radius-pill)",
      background: "var(--gray-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: "var(--blue-500)",
      transition: "width var(--dur-slow) var(--ease-standard)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/* FounderNexus Tooltip — small dark hint on hover/focus. */

function Tooltip({
  label,
  children,
  side = "top",
  className = "",
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    className: `fn-tooltip ${className}`,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      background: "var(--navy-900)",
      color: "var(--white)",
      font: "var(--fw-medium) var(--fs-xs)/1.3 var(--font-sans)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/* FounderNexus FormField — label + control + helper/error scaffold.
   Keeps labels and hints close to the field, per the brand's staged-form habit. */

function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-field ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--text-label)",
      color: "var(--navy-900)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-error)",
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      fontSize: "var(--fs-xs)",
      color: error ? "var(--status-error)" : "var(--gray-600)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Radio — single-select control with label. */

function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `fn-radio ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "radio",
    "aria-checked": !!checked,
    onClick: e => !disabled && onChange?.(value, e),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "50%",
      background: "var(--white)",
      border: `1.5px solid ${checked ? "var(--blue-500)" : "var(--border-strong)"}`,
      transition: "border-color var(--dur-fast)"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--blue-500)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--navy-900)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/* FounderNexus Switch — binary toggle. */

function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = "",
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `fn-switch ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    style: {
      position: "relative",
      width: 40,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--blue-500)" : "var(--gray-300)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--navy-900)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus iconography — Lucide-style line icons (24x24, stroke 2, round caps),
   matching the brand's extracted SVG set. Single-color via currentColor. */

const PATHS = {
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  location: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  star: '<path d="M12 2.5 14.9 8.4l6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.05 1.1-6.47L2.6 9.35l6.5-.95Z"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  settings: '<path d="M12.2 2h-.4a2 2 0 0 0-2 2 1.7 1.7 0 0 1-.85 1.48 1.7 1.7 0 0 1-1.7 0 2 2 0 0 0-2.74.73l-.2.35a2 2 0 0 0 .73 2.73 1.7 1.7 0 0 1 0 2.94 2 2 0 0 0-.73 2.73l.2.35a2 2 0 0 0 2.74.73 1.7 1.7 0 0 1 1.7 0 1.7 1.7 0 0 1 .85 1.48 2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2 1.7 1.7 0 0 1 .85-1.48 1.7 1.7 0 0 1 1.7 0 2 2 0 0 0 2.74-.73l.2-.35a2 2 0 0 0-.73-2.73 1.7 1.7 0 0 1 0-2.94 2 2 0 0 0 .73-2.73l-.2-.35a2 2 0 0 0-2.74-.73 1.7 1.7 0 0 1-1.7 0A1.7 1.7 0 0 1 14.2 4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  folder: '<path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"/>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5Z"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/><path d="M10 21v-3h4v3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  "trending-up": '<path d="M22 7 13.5 15.5 9 11l-7 7"/><path d="M16 7h6v6"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  "more-horizontal": '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4Z"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><path d="M12 16h.01"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  edit: '<path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 9l5-5 5 5"/><path d="M12 4v12"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  style = {},
  ...rest
}) {
  const body = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": rest["aria-label"] ? undefined : true
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: body || ""
    }
  }));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Badge — status / label pill.
   Used for member status, event status, and the solid-blue "Members Only" feature badge. */

const TONES = {
  neutral: {
    bg: "var(--gray-100)",
    fg: "var(--gray-700)",
    dot: "var(--gray-400)"
  },
  info: {
    bg: "var(--blue-50)",
    fg: "var(--blue-600)",
    dot: "var(--blue-500)"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success)",
    dot: "var(--status-success)"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    fg: "#B25E09",
    dot: "var(--status-warning)"
  },
  error: {
    bg: "var(--status-error-bg)",
    fg: "var(--status-error)",
    dot: "var(--status-error)"
  },
  feature: {
    bg: "var(--blue-500)",
    fg: "var(--white)",
    dot: "var(--white)"
  }
};
function Badge({
  children,
  tone = "neutral",
  size = "md",
  dot = false,
  icon,
  className = "",
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const small = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `fn-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: small ? 4 : 6,
      height: small ? 20 : 26,
      padding: small ? "0 8px" : "0 10px",
      font: `var(--fw-semibold) ${small ? "var(--fs-xs)" : "var(--fs-sm)"}/1 var(--font-sans)`,
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: small ? 12 : 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Button.
   Primary: saturated blue fill, white text. Secondary: white surface, navy text,
   light border. Ghost: transparent. Link: text-only. Compact heights, 8px radius. */

const SIZES = {
  sm: {
    height: 36,
    padding: "0 14px",
    font: "var(--fs-sm)",
    icon: 16,
    gap: 6
  },
  md: {
    height: 44,
    padding: "0 18px",
    font: "var(--fs-base)",
    icon: 18,
    gap: 8
  },
  lg: {
    height: 52,
    padding: "0 24px",
    font: "var(--fs-md)",
    icon: 20,
    gap: 8
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    if (variant === "secondary" || variant === "ghost") return {
      background: "transparent",
      color: "var(--action-disabled-text)",
      border: "1px solid var(--border-subtle)"
    };
    if (variant === "link") return {
      background: "transparent",
      color: "var(--action-disabled-text)",
      border: "1px solid transparent"
    };
    return {
      background: "var(--action-disabled)",
      color: "var(--action-disabled-text)",
      border: "1px solid transparent"
    };
  }
  switch (variant) {
    case "secondary":
      return {
        background: "var(--white)",
        color: "var(--navy-900)",
        border: "1px solid var(--border-default)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--blue-500)",
        border: "1px solid transparent"
      };
    case "link":
      return {
        background: "transparent",
        color: "var(--blue-500)",
        border: "1px solid transparent",
        padding: 0,
        height: "auto"
      };
    case "danger":
      return {
        background: "var(--status-error)",
        color: "var(--white)",
        border: "1px solid transparent"
      };
    default:
      // primary
      return {
        background: "var(--action-primary)",
        color: "var(--white)",
        border: "1px solid transparent"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  className = "",
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, disabled);
  const isLink = variant === "link";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: isLink ? "auto" : s.height,
    padding: isLink ? 0 : s.padding,
    width: fullWidth ? "100%" : "auto",
    font: `var(--fw-semibold) ${s.font}/1 var(--font-sans)`,
    letterSpacing: "-0.005em",
    borderRadius: isLink ? 0 : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
    whiteSpace: "nowrap",
    textDecoration: isLink ? "underline" : "none",
    textUnderlineOffset: "3px",
    ...v,
    ...style
  };
  const hoverClass = `fn-btn fn-btn--${variant}${disabled ? " is-disabled" : ""}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: `${hoverClass} ${className}`,
    style: base
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }), /*#__PURE__*/React.createElement("style", null, `
        .fn-btn--primary:not(.is-disabled):hover { background: var(--action-primary-hover) !important; }
        .fn-btn--primary:not(.is-disabled):active { background: var(--action-primary-active) !important; transform: translateY(1px); }
        .fn-btn--secondary:not(.is-disabled):hover { background: var(--blue-50) !important; border-color: var(--blue-300) !important; }
        .fn-btn--secondary:not(.is-disabled):active { transform: translateY(1px); }
        .fn-btn--ghost:not(.is-disabled):hover { background: var(--blue-50) !important; }
        .fn-btn--danger:not(.is-disabled):hover { background: #B42318 !important; }
        .fn-btn--link:not(.is-disabled):hover { color: var(--action-primary-hover) !important; }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Chip — compact category / filter / metadata token.
   Soft blue surface, navy text, modest radius (matches event-card category chips). */

const SIZES = {
  s: {
    height: 24,
    padding: "0 8px",
    font: "var(--fs-xs)",
    icon: 13
  },
  m: {
    height: 28,
    padding: "0 10px",
    font: "var(--fs-sm)",
    icon: 14
  }
};
function Chip({
  children,
  size = "s",
  selected = false,
  outline = false,
  onRemove,
  iconLeft,
  className = "",
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.s;
  const surface = selected ? {
    background: "var(--blue-100)",
    color: "var(--navy-900)",
    border: "1px solid var(--blue-300)"
  } : outline ? {
    background: "var(--white)",
    color: "var(--gray-700)",
    border: "1px solid var(--border-default)"
  } : {
    background: "var(--blue-50)",
    color: "var(--navy-900)",
    border: "1px solid transparent"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `fn-chip ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: s.height,
      padding: s.padding,
      font: `var(--fw-medium) ${s.font}/1 var(--font-sans)`,
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...surface,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      marginRight: -2,
      color: "inherit",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: s.icon
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus IconButton — square icon-only control for toolbars, cards, nav. */

const SIZES = {
  sm: 32,
  md: 40,
  lg: 44
};
const ICON = {
  sm: 16,
  md: 20,
  lg: 22
};
function variantStyle(variant, disabled) {
  if (disabled) return {
    background: "transparent",
    color: "var(--action-disabled-text)",
    border: "1px solid var(--border-subtle)"
  };
  switch (variant) {
    case "primary":
      return {
        background: "var(--action-primary)",
        color: "var(--white)",
        border: "1px solid transparent"
      };
    case "outline":
      return {
        background: "var(--white)",
        color: "var(--navy-900)",
        border: "1px solid var(--border-default)"
      };
    case "ghost":
    default:
      return {
        background: "transparent",
        color: "var(--gray-600)",
        border: "1px solid transparent"
      };
  }
}
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  className = "",
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "aria-label": ariaLabel,
    className: `fn-iconbtn fn-iconbtn--${variant}${disabled ? " is-disabled" : ""} ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast)",
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ICON[size] || ICON.md
  }), /*#__PURE__*/React.createElement("style", null, `
        .fn-iconbtn--ghost:not(.is-disabled):hover { background: var(--gray-100) !important; color: var(--navy-900) !important; }
        .fn-iconbtn--outline:not(.is-disabled):hover { background: var(--blue-50) !important; border-color: var(--blue-300) !important; }
        .fn-iconbtn--primary:not(.is-disabled):hover { background: var(--action-primary-hover) !important; }
      `));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/EventCard.jsx
try { (() => {
/* FounderNexus EventCard — the signature member/event-listing card.
   Dark image header with date badge + location, body with metadata + topic chips + actions. */

function EventCard({
  image,
  day,
  month,
  weekday,
  location,
  locationDetail,
  title,
  time,
  speaker,
  description,
  topics = [],
  membersOnly = false,
  status,
  // optional Badge {tone,label}
  registerLabel = "Register to event",
  detailsLabel = "See more details",
  onRegister,
  onDetails,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-eventcard ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 150,
      background: image ? `linear-gradient(180deg, rgba(1,5,42,0.15), rgba(1,5,42,0.55)), url(${image}) center/cover` : "var(--navy-700)"
    }
  }, membersOnly && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "feature",
    icon: "star"
  }, "Members Only")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      display: "flex",
      alignItems: "flex-start",
      gap: 6,
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 30px/1 var(--font-sans)",
      letterSpacing: "-0.02em"
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-sm)/1.1 var(--font-sans)"
    }
  }, month), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--fs-xs)/1.1 var(--font-sans)",
      opacity: 0.85
    }
  }, weekday))), location && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      bottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 4,
      color: "var(--white)",
      font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15
  }), location)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-bold) var(--fs-md)/1.3 var(--font-sans)",
      color: "var(--navy-900)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px 20px",
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16,
    color: "var(--blue-500)"
  }), time), speaker && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 16,
    color: "var(--blue-500)"
  }), speaker)), locationDetail && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 7,
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--blue-500)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, locationDetail)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      margin: 0,
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, description), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t
  }, t))), status && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status.tone,
    dot: true
  }, status.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onRegister,
    style: {
      flex: 1
    }
  }, registerLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    iconRight: "arrow-up-right",
    onClick: onDetails,
    style: {
      flex: 1
    }
  }, detailsLabel))));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SpeakerCard.jsx
try { (() => {
/* FounderNexus SpeakerCard — speaker/expert with photo, name, role, topic.
   Never invent credentials. */

function SpeakerCard({
  photo,
  name,
  role,
  company,
  topic,
  event,
  topics = [],
  onClick,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-speakercard ${onClick ? "fn-card--interactive" : ""} ${className}`,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow var(--dur-base), transform var(--dur-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: photo ? `url(${photo}) center/cover` : "var(--navy-700)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-md)/1.25 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, name), (role || company) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      marginTop: 2
    }
  }, role, role && company ? " · " : "", company)), topic && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 7,
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 16,
    color: "var(--blue-500)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, topic)), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t,
    size: "s"
  }, t))), event && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--blue-500)",
      marginTop: 2
    }
  }, event, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 15
  }))), /*#__PURE__*/React.createElement("style", null, `.fn-speakercard.fn-card--interactive:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }`));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
/* FounderNexus StatCard — compact dashboard/admin metric. */

function StatCard({
  label,
  value,
  sublabel,
  icon,
  trend,
  className = "",
  style = {}
}) {
  const up = trend && trend.dir !== "down";
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-statcard ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 20px",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label)",
      color: "var(--gray-600)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 32,
      height: 32,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-50)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--blue-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xl)/1 var(--font-sans)",
      color: "var(--navy-900)",
      letterSpacing: "-0.02em"
    }
  }, value), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)",
      color: up ? "var(--status-success)" : "var(--status-error)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trending-up",
    size: 15,
    style: {
      transform: up ? "none" : "scaleY(-1)"
    }
  }), trend.value)), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      fontSize: "var(--fs-xs)",
      color: "var(--gray-500)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/* FounderNexus Dialog — focused confirmation / decision modal. */

function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  width = 460,
  className = "",
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "rgba(1,5,42,0.45)",
      backdropFilter: "blur(2px)",
      animation: "fnFade var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: className,
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      padding: 28,
      animation: "fnPop var(--dur-base) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h3)",
      color: "var(--navy-900)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      marginTop: 6
    }
  }, description)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    "aria-label": "Close",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 24
    }
  }, actions)), /*#__PURE__*/React.createElement("style", null, `@keyframes fnFade{from{opacity:0}to{opacity:1}}
        @keyframes fnPop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Steps.jsx
try { (() => {
/* FounderNexus Steps — staged process indicator (membership: apply → review → admission).
   orientation horizontal | vertical. Each step: { label, description }. */

function Steps({
  steps = [],
  current = 0,
  orientation = "horizontal",
  className = "",
  style = {}
}) {
  const vertical = orientation === "vertical";
  return /*#__PURE__*/React.createElement("ol", {
    className: `fn-steps ${className}`,
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      gap: vertical ? 0 : 8,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const color = done ? "var(--blue-500)" : active ? "var(--blue-500)" : "var(--gray-300)";
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        flexDirection: vertical ? "row" : "column",
        gap: vertical ? 14 : 10,
        flex: vertical ? "none" : 1,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        gap: vertical ? 0 : 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: done ? "var(--blue-500)" : active ? "var(--blue-50)" : "var(--white)",
        border: `2px solid ${color}`,
        color: done ? "#fff" : active ? "var(--blue-600)" : "var(--gray-400)",
        font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)"
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      color: "#fff",
      strokeWidth: 3
    }) : i + 1), i < steps.length - 1 && (vertical ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 28,
        background: done ? "var(--blue-500)" : "var(--gray-200)",
        margin: "4px 0"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        height: 2,
        flex: 1,
        background: done ? "var(--blue-500)" : "var(--gray-200)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: vertical ? 20 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: `var(--fw-semibold) var(--fs-sm)/1.3 var(--font-sans)`,
        color: active || done ? "var(--navy-900)" : "var(--gray-500)"
      }
    }, s.label), s.description && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--text-body-sm)",
        fontSize: "var(--fs-xs)",
        color: "var(--gray-500)",
        marginTop: 3,
        maxWidth: 220
      }
    }, s.description)));
  }));
}
Object.assign(__ds_scope, { Steps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Steps.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/* FounderNexus Checkbox — square check control with label. */

function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  size = "md",
  className = "",
  style = {},
  id,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dim = size === "sm" ? 18 : 20;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `fn-checkbox ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      background: on ? "var(--blue-500)" : "var(--white)",
      border: `1.5px solid ${on ? "var(--blue-500)" : "var(--border-strong)"}`,
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: dim - 6,
    color: "var(--white)",
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--navy-900)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Input — text field with optional leading icon and states. */

function Input({
  size = "md",
  iconLeft,
  invalid = false,
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const height = size === "sm" ? 38 : size === "lg" ? 52 : 44;
  const [focused, setFocused] = React.useState(false);
  const borderColor = invalid ? "var(--status-error)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-input ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height,
      padding: iconLeft ? "0 14px 0 12px" : "0 14px",
      background: disabled ? "var(--gray-100)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--text-body)",
      color: "var(--navy-900)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus Select — native-backed dropdown with brand chrome. */

function Select({
  size = "md",
  invalid = false,
  disabled = false,
  placeholder,
  children,
  className = "",
  style = {},
  ...rest
}) {
  const height = size === "sm" ? 38 : size === "lg" ? 52 : 44;
  const [focused, setFocused] = React.useState(false);
  const borderColor = invalid ? "var(--status-error)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-select ${className}`,
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height,
      background: disabled ? "var(--gray-100)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      border: "none",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      background: "transparent",
      padding: "0 38px 0 14px",
      font: "var(--text-body)",
      color: "var(--navy-900)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--gray-500)",
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/* FounderNexus Breadcrumb — compact path for deep product views. */

function Breadcrumb({
  items = [],
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `fn-breadcrumb ${className}`,
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)",
        color: "var(--navy-900)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
        color: "var(--gray-600)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--gray-400)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/* FounderNexus SidebarNav — member/admin side navigation.
   Quiet, status-driven; active item gets a soft-blue surface + navy text. */

function SidebarNav({
  items = [],
  value,
  onChange,
  footer,
  className = "",
  style = {}
}) {
  const active = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("nav", {
    className: `fn-sidenav ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "16px 16px",
      minWidth: 220,
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange?.(it.value),
      className: "fn-sidenav-item",
      "aria-current": on ? "page" : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "var(--blue-50)" : "transparent",
        color: on ? "var(--blue-600)" : "var(--gray-700)",
        font: `var(--fw-${on ? "semibold" : "medium"}) var(--fs-base)/1 var(--font-sans)`,
        transition: "background var(--dur-fast), color var(--dur-fast)"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--blue-500)" : "var(--gray-200)",
        color: on ? "#fff" : "var(--gray-700)",
        font: "var(--fw-semibold) var(--fs-xs)/20px var(--font-sans)",
        textAlign: "center"
      }
    }, it.badge));
  }), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 16
    }
  }, footer), /*#__PURE__*/React.createElement("style", null, `.fn-sidenav-item[aria-current="page"]:hover { background: var(--blue-50) !important; }
        .fn-sidenav-item:not([aria-current]):hover { background: var(--gray-100) !important; color: var(--navy-900) !important; }`));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/* FounderNexus SiteHeader — public marketing header.
   White surface, navy nav, primary CTA on the right. ~80px tall. */

function SiteHeader({
  links = [],
  ctaLabel = "Apply now",
  onCta,
  secondaryLabel,
  onSecondary,
  logoBase = "assets/logos",
  active,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: `fn-siteheader ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "var(--header-height)",
      padding: "0 40px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 30,
    base: logoBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, links.map(l => {
    const on = l.label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href || "#",
      style: {
        font: `var(--fw-${on ? "semibold" : "medium"}) var(--fs-sm)/1 var(--font-sans)`,
        color: on ? "var(--navy-900)" : "var(--gray-700)",
        textDecoration: "none"
      }
    }, l.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onSecondary
  }, secondaryLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* FounderNexus Tabs — local subnavigation.
   `pill` variant matches the member-area event tabs (active = solid blue pill).
   `underline` variant for content/page subnav. */

function Tabs({
  items = [],
  value,
  onChange,
  variant = "pill",
  className = "",
  style = {}
}) {
  const active = value ?? items[0]?.value;
  if (variant === "underline") {
    return /*#__PURE__*/React.createElement("div", {
      className: `fn-tabs ${className}`,
      role: "tablist",
      style: {
        display: "flex",
        gap: 4,
        borderBottom: "1px solid var(--border-subtle)",
        ...style
      }
    }, items.map(it => {
      const on = it.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange?.(it.value),
        style: {
          appearance: "none",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "10px 4px",
          margin: "0 8px",
          marginBottom: -1,
          font: `var(--fw-${on ? "semibold" : "medium"}) var(--fs-sm)/1 var(--font-sans)`,
          color: on ? "var(--navy-900)" : "var(--gray-600)",
          borderBottom: `2px solid ${on ? "var(--blue-500)" : "transparent"}`,
          transition: "color var(--dur-fast)"
        }
      }, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `fn-tabs ${className}`,
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange?.(it.value),
      className: "fn-tab-pill",
      style: {
        appearance: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: "var(--radius-md)",
        font: `var(--fw-${on ? "semibold" : "medium"}) var(--fs-sm)/1 var(--font-sans)`,
        background: on ? "var(--blue-500)" : "transparent",
        color: on ? "var(--white)" : "var(--gray-600)",
        transition: "background var(--dur-fast), color var(--dur-fast)"
      }
    }, it.label);
  }), /*#__PURE__*/React.createElement("style", null, `.fn-tab-pill[aria-selected="false"]:hover { background: var(--gray-100) !important; color: var(--navy-900) !important; }`));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/insights/Insights.jsx
try { (() => {
/* FounderNexus — Insights page. Three switchable layout directions for the
   article index + card. All copy uses clearly-labeled PLACEHOLDER titles.
   Decision taxonomy: Hiring, Fundraising, GTM/Pricing, Leadership, Board.
   Stage 1–4. No fabricated research, no prices, "Stage" never "tier". */

const {
  SiteHeader,
  Button,
  Chip,
  Badge,
  Card,
  Icon,
  Avatar
} = window.FounderNexusDesignSystem_c60151;
const ASSET = "../../assets";

/* ---- Placeholder data (titles clearly labeled as placeholders) ---- */
const DECISIONS = ["Hiring", "Fundraising", "GTM/Pricing", "Leadership", "Board"];
const ARTICLES = [{
  decision: "Fundraising",
  stage: "Stage 2",
  title: "[Placeholder] When a bridge round is the right call — and when it's avoidance",
  hook: "A decision frame for reading your own runway honestly before you raise again.",
  read: "9 min",
  featured: true
}, {
  decision: "Hiring",
  stage: "Stage 1",
  title: "[Placeholder] The first ten hires that set your ceiling",
  hook: "Why early hiring mistakes compound, and the questions that surface them early."
}, {
  decision: "GTM/Pricing",
  stage: "Stage 3",
  title: "[Placeholder] Repricing without re-pitching your whole base",
  hook: "Sequencing a price change so your strongest accounts stay your strongest accounts."
}, {
  decision: "Leadership",
  stage: "Stage 2",
  title: "[Placeholder] The month you stop being the smartest operator in the room",
  hook: "Recognizing the handoff from doing to deciding before it forces itself on you."
}, {
  decision: "Board",
  stage: "Stage 3",
  title: "[Placeholder] Running a board you actually get value from",
  hook: "Turning a reporting obligation into a decision-quality asset."
}, {
  decision: "Hiring",
  stage: "Stage 4",
  title: "[Placeholder] Hiring an exec who has scaled past where you are",
  hook: "How to assess judgment you don't yet have the experience to evaluate."
}, {
  decision: "Fundraising",
  stage: "Stage 1",
  title: "[Placeholder] Pre-seed terms you'll still be living with at Series B",
  hook: "The few early terms that quietly shape every later decision."
}, {
  decision: "GTM/Pricing",
  stage: "Stage 2",
  title: "[Placeholder] Reading a flat quarter without overcorrecting",
  hook: "Separating a GTM problem from a market-timing problem under pressure."
}, {
  decision: "Leadership",
  stage: "Stage 4",
  title: "[Placeholder] Holding conviction when your team has stopped pushing back",
  hook: "Designing dissent back into a company that has learned to agree with you."
}];
const STAGES = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];
function decisionColor() {
  return "var(--blue-500)";
}

/* ============================================================= TITLE ===== */
function TitleBlock({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Insights \xB7 decision-quality writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 50px/1.05 var(--font-display)",
      letterSpacing: "-0.025em",
      color: "var(--navy-900)",
      maxWidth: 780,
      margin: 0
    }
  }, "Pattern recognition for the decisions that actually move outcomes."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 19px/1.6 var(--font-sans)",
      color: "var(--gray-600)",
      maxWidth: 620,
      margin: "18px 0 0"
    }
  }, "Stage-specific, decision-first writing for venture-scale founders \u2014 organized by the call you're carrying, not by topic taxonomy. ", note));
}

/* ====================================================== FEATURED ========= */
function Featured({
  a,
  variant = "wide"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 40px 8px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    interactive: true,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(160deg, rgba(1,5,42,0.10), rgba(1,5,42,0.55)), url(${ASSET}/images/landing-pages/founders-working.jpg) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 44px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "feature"
  }, "Featured"), /*#__PURE__*/React.createElement(Chip, {
    iconLeft: "briefcase"
  }, a.decision), /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, a.stage)), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 30px/1.2 var(--font-display)",
      letterSpacing: "-0.015em",
      color: "var(--navy-900)",
      margin: 0
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 17px/1.6 var(--font-sans)",
      color: "var(--gray-600)",
      margin: "16px 0 0"
    }
  }, a.hook), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right"
  }, "Read the piece"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), a.read, " read"))))));
}

/* ====================================================== FILTER BAR ======= */
function FilterBar({
  decision,
  setDecision,
  stage,
  setStage
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginRight: 4
    }
  }, "DECISION"), /*#__PURE__*/React.createElement(Chip, {
    selected: decision === "All",
    onClick: () => setDecision("All"),
    style: {
      cursor: "pointer"
    }
  }, "All"), DECISIONS.map(d => /*#__PURE__*/React.createElement(Chip, {
    key: d,
    selected: decision === d,
    onClick: () => setDecision(d),
    style: {
      cursor: "pointer"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginRight: 4
    }
  }, "STAGE"), /*#__PURE__*/React.createElement(Chip, {
    outline: stage !== "All",
    selected: stage === "All",
    onClick: () => setStage("All"),
    style: {
      cursor: "pointer"
    }
  }, "All"), STAGES.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    outline: stage !== s,
    selected: stage === s,
    onClick: () => setStage(s),
    style: {
      cursor: "pointer"
    }
  }, s.replace("Stage ", "S")))));
}
function useFiltered() {
  const [decision, setDecision] = React.useState("All");
  const [stage, setStage] = React.useState("All");
  const rows = ARTICLES.filter(a => !a.featured).filter(a => decision === "All" || a.decision === decision).filter(a => stage === "All" || a.stage === stage);
  return {
    decision,
    setDecision,
    stage,
    setStage,
    rows
  };
}

/* =============================================== DIRECTION A — editorial list */
function DirectionA() {
  const f = useFiltered();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "Read top to bottom, or filter to the decision in front of you."
  }), /*#__PURE__*/React.createElement(Featured, {
    a: ARTICLES[0]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "32px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(FilterBar, f)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "8px 40px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 24
    }
  }, f.rows.map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    className: "fn-ins-row",
    style: {
      display: "grid",
      gridTemplateColumns: "190px 1fr 28px",
      gap: 28,
      alignItems: "center",
      padding: "26px 12px",
      borderBottom: "1px solid var(--border-subtle)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: "var(--blue-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: decisionColor()
    }
  }), a.decision), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, a.stage)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 21px/1.3 var(--font-sans)",
      color: "var(--navy-900)",
      letterSpacing: "-0.01em"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      marginTop: 6
    }
  }, a.hook)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20,
    color: "var(--gray-400)"
  }))))), /*#__PURE__*/React.createElement("style", null, `.fn-ins-row:hover { background: var(--gray-50); }
        .fn-ins-row:hover .fn-ins-row-x { color: var(--blue-500); }`));
}

/* ====================================== DIRECTION B — grouped-by-decision grid */
function ArticleCardB({
  a
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "lg",
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    iconLeft: "briefcase"
  }, a.decision), /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, a.stage)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-semibold) 19px/1.32 var(--font-sans)",
      color: "var(--navy-900)",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      margin: "10px 0 0",
      flex: 1
    }
  }, a.hook), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: "var(--blue-500)",
      marginTop: 18
    }
  }, "Read ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }))));
}
function DirectionB() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "Grouped by the decision each piece addresses."
  }), /*#__PURE__*/React.createElement(Featured, {
    a: ARTICLES[0]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "44px 40px 88px"
    }
  }, DECISIONS.map(d => {
    const rows = ARTICLES.filter(a => !a.featured && a.decision === d);
    if (!rows.length) return null;
    return /*#__PURE__*/React.createElement("section", {
      key: d,
      style: {
        marginBottom: 52
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
        paddingBottom: 12,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--fw-bold) 22px/1 var(--font-display)",
        color: "var(--navy-900)",
        letterSpacing: "-0.01em",
        display: "inline-flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: decisionColor()
      }
    }), d), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-meta)",
        color: "var(--gray-500)"
      }
    }, rows.length, " ", rows.length === 1 ? "piece" : "pieces")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }
    }, rows.map((a, i) => /*#__PURE__*/React.createElement(ArticleCardB, {
      key: i,
      a: a
    }))));
  })));
}

/* ============================== DIRECTION C — executive matrix (sticky rail) */
function ArticleRowC({
  a
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "fn-ins-cmatrix",
    style: {
      display: "block",
      textDecoration: "none",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 12px/1 var(--font-sans)",
      color: "var(--blue-600)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, a.decision), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "var(--gray-400)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, a.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 16px/1.34 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      marginTop: 6
    }
  }, a.hook));
}
function DirectionC() {
  const f = useFiltered();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "A dense, scannable index \u2014 filter from the rail."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 40px 88px",
      display: "grid",
      gridTemplateColumns: "232px 1fr",
      gap: 36,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 100,
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginBottom: 12
    }
  }, "DECISION"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, ["All", ...DECISIONS].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => f.setDecision(d),
    style: {
      textAlign: "left",
      border: "none",
      background: f.decision === d ? "var(--blue-50)" : "transparent",
      color: f.decision === d ? "var(--blue-600)" : "var(--gray-700)",
      font: `var(--fw-${f.decision === d ? "semibold" : "medium"}) 14px/1 var(--font-sans)`,
      padding: "9px 12px",
      borderRadius: "var(--radius-md)",
      cursor: "pointer"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginBottom: 12
    }
  }, "STAGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["All", ...STAGES].map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    selected: f.stage === s,
    outline: f.stage !== s,
    onClick: () => f.setStage(s),
    style: {
      cursor: "pointer"
    }
  }, s === "All" ? "All" : s.replace("Stage ", "S"))))), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 14px/1.4 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, "Carrying this decision now?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-700)",
      margin: "8px 0 12px"
    }
  }, "Bring it to a stage-matched room."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    fullWidth: true
  }, "Express your interest"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Featured, {
    a: ARTICLES[0],
    variant: "inline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 28
    }
  }, f.rows.map((a, i) => /*#__PURE__*/React.createElement(ArticleRowC, {
    key: i,
    a: a
  }))))), /*#__PURE__*/React.createElement("style", null, `.fn-ins-cmatrix:hover { border-color: var(--blue-300); box-shadow: var(--shadow-sm); }`));
}

/* ===================================================== CTA + SWITCHER ===== */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gray-50)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "64px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 30px/1.15 var(--font-display)",
      letterSpacing: "-0.015em",
      color: "var(--navy-900)",
      margin: 0
    }
  }, "Reading is the warm-up. The decision happens in the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--gray-600)",
      margin: "12px 0 0"
    }
  }, "If a piece maps to a call you're weighing, bring it to a stage-matched founder room.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Apply for membership"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "arrow-right"
  }, "See upcoming rooms"))));
}
const DIRECTIONS = [{
  id: "A",
  label: "A · Editorial list",
  render: /*#__PURE__*/React.createElement(DirectionA, null)
}, {
  id: "B",
  label: "B · Decision sections",
  render: /*#__PURE__*/React.createElement(DirectionB, null)
}, {
  id: "C",
  label: "C · Executive matrix",
  render: /*#__PURE__*/React.createElement(DirectionC, null)
}];
function Switcher({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 200,
      display: "flex",
      gap: 4,
      background: "var(--navy-900)",
      padding: 5,
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-xl)"
    }
  }, DIRECTIONS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => onChange(d.id),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      background: value === d.id ? "var(--blue-500)" : "transparent",
      color: value === d.id ? "#fff" : "var(--gray-300)"
    }
  }, d.label)));
}
function InsightsPage() {
  const [dir, setDir] = React.useState("A");
  const current = DIRECTIONS.find(d => d.id === dir);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoBase: `${ASSET}/logos`,
    active: "Insights",
    links: [{
      label: "How it works"
    }, {
      label: "Insights"
    }, {
      label: "Stories"
    }, {
      label: "Events"
    }],
    secondaryLabel: "Sign in",
    ctaLabel: "Apply now"
  }), current.render, /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Switcher, {
    value: dir,
    onChange: setDir
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(InsightsPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/insights/Insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Landing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus marketing landing page — composed from design-system components.
   Copy drawn from the approved messaging framework (judgment-infrastructure register). */

const {
  SiteHeader,
  Button,
  Card,
  Chip,
  Badge,
  Icon,
  Steps,
  EventCard,
  Logo,
  Avatar
} = window.FounderNexusDesignSystem_c60151;
const ASSET = "../../assets";
function Section({
  id,
  children,
  bg = "var(--white)",
  pad = "88px 40px",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fn-eyebrow",
    style: {
      marginBottom: 16
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)",
    pad: "72px 40px 80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    icon: "lock",
    style: {
      marginBottom: 22
    }
  }, "Invitation-only \xB7 venture-scale founders"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 52px/1.05 var(--font-display)",
      letterSpacing: "-0.025em",
      color: "var(--navy-900)"
    }
  }, "Better decisions start with the right room."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 19px/1.6 var(--font-sans)",
      color: "var(--gray-600)",
      margin: "20px 0 0",
      maxWidth: 520
    }
  }, "FounderNexus puts the right founder experience in the room at the moment a decision matters \u2014 curated, stage-specific rooms where you pressure-test high-stakes calls with peers who have seen the pattern, and leave with a practical next step."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Apply for membership"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "arrow-right"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, ["Maya Olsson", "Court Lorenzini", "Xiao Wang", "David Hersh"].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px #fff"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, "Founders across Stage 1\u20134, organized by decision \u2014 not geography."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/images/landing-pages/founders-working.jpg`,
    alt: "Founders",
    style: {
      width: "100%",
      height: 460,
      objectFit: "cover",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -22,
      bottom: 28
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      width: 230,
      boxShadow: "var(--shadow-xl)"
    },
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-50)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    color: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 15px/1.2 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, "One actionable insight"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, "captured every session"))))))));
}
function LogoStrip() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)",
    pad: "0 40px 56px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-500)",
      maxWidth: 260
    }
  }, "Trusted by founders building venture-scale companies, and the partners who support them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/partners/google-g-logo.png`,
    alt: "",
    style: {
      height: 30,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/partners/seed-ip-logo.png`,
    alt: "",
    style: {
      height: 34,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 17px/1 var(--font-sans)",
      color: "var(--gray-400)"
    }
  }, "Stage 1\u20134 rooms"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 17px/1 var(--font-sans)",
      color: "var(--gray-400)"
    }
  }, "Seattle \xB7 Bellevue \xB7 Online"))));
}
function WhyItExists() {
  const items = [{
    icon: "alert-circle",
    title: "Expensive decisions, incomplete context",
    body: "Founders rarely fail for lack of ambition. They make high-stakes calls under pressure, without enough relevant pattern recognition around them."
  }, {
    icon: "users",
    title: "Few unconflicted peers",
    body: "Investors, vendors, and advisors all carry a stake in the answer. A same-stage peer one step ahead of your exact problem does not."
  }, {
    icon: "trending-up",
    title: "Judgment, not more contacts",
    body: "The value is not access for its own sake. It is relevant founder judgment while the decision is still live."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--gray-50)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why it exists"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-h1)",
      color: "var(--navy-900)",
      maxWidth: 720
    }
  }, "Founder outcomes are shaped by decision environments, not just effort."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 40
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-lg)",
      background: "var(--blue-50)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    color: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h4)",
      color: "var(--navy-900)",
      marginBottom: 8
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, it.body)))));
}
function WhatMembersGet() {
  const benefits = [{
    icon: "users",
    t: "Curated founder rooms",
    d: "Stage-specific rooms convened around the decision you're actually carrying."
  }, {
    icon: "message-circle",
    t: "Practical sessions",
    d: "Pressure-test real tradeoffs with peers who have no stake in your answer."
  }, {
    icon: "check-circle",
    t: "A captured takeaway",
    d: "Every standard session ends with your own actionable insight, on the record."
  }, {
    icon: "mail",
    t: "48-hour follow-up",
    d: "Follow-up lands while the decision is still live, referencing what you said."
  }, {
    icon: "calendar",
    t: "Events & speakers",
    d: "Member-only dinners and sessions with experienced operators."
  }, {
    icon: "shield",
    t: "Peer-observed fit",
    d: "Fit is observed by peers, not just approved internally — it protects the room."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What members get"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-h1)",
      color: "var(--navy-900)",
      maxWidth: 560
    }
  }, "Relevant judgment, the moment a decision matters.")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right"
  }, "See a sample session")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 40
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.t,
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-50)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 20,
    color: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-semibold) 17px/1.3 var(--font-sans)",
      color: "var(--navy-900)",
      marginBottom: 5
    }
  }, b.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, b.d))))));
}
function Events({
  onRegister
}) {
  const events = [{
    image: `${ASSET}/images/landing-pages/seattle-hero.jpg`,
    day: "16",
    month: "Apr",
    weekday: "Wed",
    location: "Zoom",
    title: "BYOT (Bring Your Own Topic)",
    time: "5:00 PM – 6:00 PM",
    speaker: "Court Lorenzini",
    locationDetail: "Zoom, Zoom",
    description: "An online-only session where founders raise timely issues and get input from the other founders present.",
    topics: ["GTM", "Sales", "Product"]
  }, {
    image: `${ASSET}/images/landing-pages/global-landing-hero.jpg`,
    day: "08",
    month: "May",
    weekday: "Thu",
    location: "Bellevue",
    title: "Using M&A as an Early Stage Strategy",
    time: "4:00 PM – 7:00 PM",
    speaker: "Xiao Wang",
    locationDetail: "10900 NE 4th St, Suite 1400, Bellevue, WA",
    description: "How an early-stage startup can use strategic M&A as a springboard. Xiao shares his learnings from Series A onward.",
    topics: ["M&A", "Marketing"]
  }, {
    image: `${ASSET}/images/landing-pages/seattle-hero.jpg`,
    day: "08",
    month: "May",
    weekday: "Thu",
    location: "Bellevue, WA",
    membersOnly: true,
    title: "Members-Only Dinner",
    time: "7:15 PM – 9:45 PM",
    speaker: "Court Lorenzini",
    locationDetail: "Bellevue, WA, TBD",
    description: "A no-host dinner to go a level deeper. Get to know other FounderNexus members and dive into your live issues.",
    topics: ["GTM", "Sales", "Product"]
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--gray-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Upcoming events"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-h1)",
      color: "var(--navy-900)"
    }
  }, "Where the room comes together.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-up-right"
  }, "All events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 40
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e, {
    onRegister: onRegister,
    onDetails: onRegister
  })))));
}
function Process() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "How membership works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-h1)",
      color: "var(--navy-900)"
    }
  }, "Earned through fit with the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--gray-600)",
      marginTop: 18,
      maxWidth: 460
    }
  }, "FounderNexus is invitation-only and organized by stage. The next step isn't to sell you a membership \u2014 it's to place you in a relevant room so you can decide whether this is your room, and the room can form a view on fit."), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 28
    }
  }, "Express your interest")), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Steps, {
    orientation: "vertical",
    current: 1,
    steps: [{
      label: "Application",
      description: "Share your founder and company context — the decisions you're carrying now."
    }, {
      label: "Assessment & peer-observed fit",
      description: "A relevant room reviews fit. We distinguish clearly between 'not yet' and a final no."
    }, {
      label: "Admission",
      description: "Complete your profile and activate your membership in your stage room."
    }]
  }))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--navy-900)",
    pad: "80px 40px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 36,
    color: "var(--blue-300)",
    style: {
      margin: "0 auto 24px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-medium) 28px/1.45 var(--font-display)",
      color: "var(--white)",
      letterSpacing: "-0.01em"
    }
  }, "\u201CI walked in carrying a pricing decision I'd been circling for weeks. Two founders had run the exact play a year ahead of me. I left with a next step, not just encouragement.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Olsson",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 15px/1.2 var(--font-sans)",
      color: "var(--white)"
    }
  }, "Stage 2 founder"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-400)"
    }
  }, "FounderNexus member")))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)",
    pad: "20px 40px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, var(--blue-500), var(--blue-action))",
      borderRadius: "var(--radius-3xl)",
      padding: "64px 56px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 38px/1.1 var(--font-display)",
      letterSpacing: "-0.02em"
    }
  }, "For founders making decisions where the wrong move is expensive."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 17px/1.6 var(--font-sans)",
      marginTop: 14,
      opacity: 0.92
    }
  }, "Quality control is intentional. The room is the product \u2014 and it stays sharp because fit is earned.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    style: {
      background: "#fff"
    }
  }, "Apply for membership"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "#fff"
    },
    iconRight: "arrow-right"
  }, "Nominate a founder"))));
}
function Footer() {
  const cols = [{
    h: "Membership",
    links: ["How it works", "Who it's for", "Apply", "Nominate a founder"]
  }, {
    h: "Rooms",
    links: ["Stage 1–4 rooms", "Events", "Speakers", "Chapters"]
  }, {
    h: "Company",
    links: ["About", "Partners", "Proof & stories", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "var(--white)",
      padding: "64px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/foundernexus-wordmark-20260422.png`,
    alt: "FounderNexus",
    style: {
      height: 30,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-400)",
      marginTop: 16,
      maxWidth: 280
    }
  }, "Judgment infrastructure for venture-scale founders. The right room, at the moment a decision matters.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-400)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-200)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "40px auto 0",
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-400)"
    }
  }, "\xA9 2026 FounderNexus. Invitation-only."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-400)"
    }
  }, "Privacy \xB7 Terms \xB7 Member agreement")));
}
function LandingPage() {
  const [toast, setToast] = React.useState(false);
  const ping = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2600);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoBase: `${ASSET}/logos`,
    active: "How it works",
    onCta: ping,
    links: [{
      label: "How it works"
    }, {
      label: "Events"
    }, {
      label: "Chapters"
    }, {
      label: "Members"
    }],
    secondaryLabel: "Sign in",
    ctaLabel: "Apply now",
    onSecondary: ping
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement(WhyItExists, null), /*#__PURE__*/React.createElement(WhatMembersGet, null), /*#__PURE__*/React.createElement(Events, {
    onRegister: ping
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--navy-900)",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-xl)",
      font: "var(--fw-medium) 14px/1 var(--font-sans)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18,
    color: "var(--blue-300)"
  }), " Demo only \u2014 application flow is a mock."));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(LandingPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-area/MemberApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FounderNexus member area — product UI recreation.
   Topbar + side nav + switchable views (Events, Profile, Content library, Benefits). */

const {
  Logo,
  SidebarNav,
  Tabs,
  EventCard,
  Card,
  Chip,
  Badge,
  Avatar,
  Button,
  IconButton,
  Checkbox,
  ProgressBar,
  Steps,
  Dialog,
  FormField,
  Input,
  Select,
  StatCard,
  Icon
} = window.FounderNexusDesignSystem_c60151;
const ASSET = "../../assets";
const IMG = {
  seattle: `${ASSET}/images/landing-pages/seattle-hero.jpg`,
  global: `${ASSET}/images/landing-pages/global-landing-hero.jpg`,
  working: `${ASSET}/images/landing-pages/founders-working.jpg`
};
const EVENTS = [{
  image: IMG.seattle,
  day: "16",
  month: "Apr",
  weekday: "Wed",
  location: "Zoom",
  title: "BYOT (Bring Your Own Topic)",
  time: "5:00 PM – 6:00 PM",
  speaker: "Court Lorenzini",
  locationDetail: "Zoom, Zoom",
  description: "BYOT — an online-only session where members and prospects raise timely issues they're facing and get input from the other founders present.",
  topics: ["GTM", "Sales", "Marketing", "Product"]
}, {
  image: IMG.global,
  day: "08",
  month: "May",
  weekday: "Thu",
  location: "Bellevue",
  title: "Using M&A as an Early Stage Strategy",
  time: "4:00 PM – 7:00 PM",
  speaker: "Xiao Wang",
  locationDetail: "10900 NE 4th St, Suite 1400, Bellevue, WA 98004",
  description: "Learn how an early-stage startup can use strategic M&A as a springboard to success. Xiao has implemented M&A as early as Series A.",
  topics: ["M&A", "Marketing"]
}, {
  image: IMG.seattle,
  day: "08",
  month: "May",
  weekday: "Thu",
  location: "Bellevue, WA",
  membersOnly: true,
  title: "Members-Only Dinner",
  time: "7:15 PM – 9:45 PM",
  speaker: "Court Lorenzini",
  locationDetail: "Bellevue, WA, TBD",
  description: "Members-only dinner (no-host) to go a level deeper. Get to know other FounderNexus members and dive into the issues you're facing.",
  topics: ["GTM", "Sales", "Product"]
}, {
  image: IMG.global,
  day: "22",
  month: "May",
  weekday: "Thu",
  location: "Zoom",
  title: "BYOT (Bring Your Own Topic)",
  time: "5:00 PM – 6:00 PM",
  speaker: "Court Lorenzini",
  locationDetail: "Zoom, Zoom",
  description: "BYOT — an online-only session where members raise timely issues they're facing and get input from the other founders present.",
  topics: ["Sales", "Marketing", "GTM", "Product"]
}, {
  image: IMG.seattle,
  day: "05",
  month: "Jun",
  weekday: "Thu",
  location: "Seattle",
  title: "90% of Startups Fail, Don't be One of Them!",
  time: "5:00 PM – 7:30 PM",
  speaker: "David Hersh",
  locationDetail: "1605 Boylston Ave Unit 310, Seattle, WA 98122 US",
  description: "Startups don't fail from the reasons we're led to believe. It's the mindsets underneath those reasons where companies go astray.",
  topics: ["Operations", "Culture", "Growth", "GTM"]
}];
function Topbar() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-height)",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    "aria-label": "Back"
  }), /*#__PURE__*/React.createElement(Logo, {
    height: 28,
    base: `${ASSET}/logos`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    "aria-label": "Notifications"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 14px/1 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, "Shamil Productions"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Shamil Productions",
    size: "sm"
  }))));
}
function EventsView() {
  const [tab, setTab] = React.useState("upcoming");
  const [gold, setGold] = React.useState(false);
  const [dialog, setDialog] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 34px/1.1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.02em",
      marginBottom: 24
    }
  }, "Events"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 28,
      flexWrap: "wrap",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: [{
      value: "upcoming",
      label: "Upcoming"
    }, {
      value: "attended",
      label: "Events attended"
    }, {
      value: "past",
      label: "Past events"
    }, {
      value: "notes",
      label: "My notes"
    }]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: gold,
    onChange: setGold,
    label: "Show gold events only"
  })), tab === "upcoming" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, EVENTS.filter(e => !gold || e.membersOnly).map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e, {
    onRegister: () => setDialog(e),
    onDetails: () => setDialog(e)
  })))) : /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      textAlign: "center",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 32,
    color: "var(--gray-400)",
    style: {
      margin: "0 auto 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h4)",
      color: "var(--navy-900)",
      marginBottom: 6
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      maxWidth: 360,
      margin: "0 auto"
    }
  }, "Your ", tab === "attended" ? "attended events" : tab === "past" ? "past events" : "notes", " will appear here once you start joining rooms.")), /*#__PURE__*/React.createElement(Dialog, {
    open: !!dialog,
    onClose: () => setDialog(null),
    title: dialog ? `Register for "${dialog.title}"?` : "",
    description: "You'll get a calendar invite and a reminder 24 hours before the room starts. This is a demo \u2014 no real registration occurs.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDialog(null)
    }, "Register to event"))
  }, dialog && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--blue-500)"
  }), dialog.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 16,
    color: "var(--blue-500)"
  }), dialog.speaker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--blue-500)",
    style: {
      marginTop: 2
    }
  }), dialog.locationDetail))));
}
function ProfileView() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 34px/1.1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.02em",
      marginBottom: 24
    }
  }, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Shamil Productions",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h3)",
      color: "var(--navy-900)"
    }
  }, "Shamil Productions"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, "Founder & CEO \xB7 Stage 2")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "edit",
    style: {
      marginLeft: "auto"
    }
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Full name",
    htmlFor: "fn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fn",
    defaultValue: "Shamil Productions"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Company",
    htmlFor: "co"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "co",
    defaultValue: "ProductionTest, Inc."
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Stage",
    htmlFor: "st"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "Stage 2"
  }, /*#__PURE__*/React.createElement("option", null, "Stage 1"), /*#__PURE__*/React.createElement("option", null, "Stage 2"), /*#__PURE__*/React.createElement("option", null, "Stage 3"), /*#__PURE__*/React.createElement("option", null, "Stage 4"))), /*#__PURE__*/React.createElement(FormField, {
    label: "Location",
    htmlFor: "lo"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "lo",
    iconLeft: "map-pin",
    defaultValue: "Seattle, WA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Areas of expertise",
    htmlFor: "ex",
    hint: "Add the topics you can contribute to a room."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      padding: "10px 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    onRemove: () => {}
  }, "GTM"), /*#__PURE__*/React.createElement(Chip, {
    onRemove: () => {}
  }, "Fundraising"), /*#__PURE__*/React.createElement(Chip, {
    onRemove: () => {}
  }, "Hiring"), /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, "+ Add")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h4)",
      marginBottom: 12
    }
  }, "Profile completion"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 80,
    label: "Almost there"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-700)",
      margin: "14px 0 0"
    }
  }, "Add a photo and your interests so the room can form a view on fit.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h4)",
      marginBottom: 14
    }
  }, "Membership status"), /*#__PURE__*/React.createElement(Steps, {
    orientation: "vertical",
    current: 1,
    steps: [{
      label: "Application received"
    }, {
      label: "Assessment & peer fit"
    }, {
      label: "Admission"
    }]
  })))));
}
function BecomeMemberView() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 34px/1.1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Become a member"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--gray-600)",
      marginBottom: 28,
      maxWidth: 560
    }
  }, "FounderNexus is invitation-only and organized by stage. The next step isn't to buy a membership \u2014 it's to find your room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Rooms attended",
    value: "3",
    icon: "users"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Takeaways logged",
    value: "7",
    icon: "check-circle"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Profile",
    value: "80%",
    icon: "user"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Fit signal",
    value: "Strong",
    icon: "trending-up",
    trend: {
      value: "good",
      dir: "up"
    }
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Steps, {
    current: 2,
    steps: [{
      label: "Application",
      description: "Founder & company context submitted"
    }, {
      label: "Guest sessions",
      description: "You've attended 3 rooms as a guest"
    }, {
      label: "Assessment",
      description: "Peer-observed fit review — in progress"
    }, {
      label: "Admission",
      description: "Activate full membership"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Request an invitation"))));
}
function PlaceholderView({
  title,
  icon,
  body
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 34px/1.1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.02em",
      marginBottom: 24
    }
  }, title), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      textAlign: "center",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 34,
    color: "var(--gray-400)",
    style: {
      margin: "0 auto 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h4)",
      color: "var(--navy-900)",
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      maxWidth: 380,
      margin: "0 auto"
    }
  }, body)));
}
function MemberApp() {
  const [page, setPage] = React.useState("events");
  const views = {
    profile: /*#__PURE__*/React.createElement(ProfileView, null),
    events: /*#__PURE__*/React.createElement(EventsView, null),
    become: /*#__PURE__*/React.createElement(BecomeMemberView, null),
    library: /*#__PURE__*/React.createElement(PlaceholderView, {
      title: "Content library",
      icon: "folder",
      body: "Session recordings, frameworks, and member resources will appear here."
    }),
    benefits: /*#__PURE__*/React.createElement(PlaceholderView, {
      title: "Benefits",
      icon: "gift",
      body: "Partner offers and member benefits, available once you're admitted."
    }),
    forum: /*#__PURE__*/React.createElement(PlaceholderView, {
      title: "Discussion Forum",
      icon: "message-circle",
      body: "Async conversation between rooms \u2014 ask a question, share a takeaway."
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--gray-50)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      background: "var(--white)",
      borderRight: "1px solid var(--border-subtle)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    value: page,
    onChange: setPage,
    items: [{
      value: "profile",
      label: "Profile",
      icon: "user"
    }, {
      value: "events",
      label: "Events",
      icon: "calendar"
    }, {
      value: "become",
      label: "Become member",
      icon: "star"
    }, {
      value: "library",
      label: "Content library",
      icon: "folder"
    }, {
      value: "benefits",
      label: "Benefits",
      icon: "gift"
    }, {
      value: "forum",
      label: "Discussion Forum",
      icon: "message-circle",
      badge: 3
    }]
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: "36px 40px",
      maxWidth: 1220
    }
  }, views[page])));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(MemberApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-area/MemberApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stories/Stories.jsx
try { (() => {
/* FounderNexus — Stories (Proof) page. 2–3 switchable directions for the
   featured story + story card. PROOF = "decisions changed in the room," not praise.
   CRITICAL: no fabricated names/quotes/companies/metrics. Every slot is a clearly
   LABELED PLACEHOLDER pending internal proof review. "Stage" never "tier". No prices. */

const {
  SiteHeader,
  Button,
  Chip,
  Badge,
  Card,
  Icon,
  Avatar
} = window.FounderNexusDesignSystem_c60151;
const ASSET = "../../assets";
const DECISIONS = ["Hiring", "Fundraising", "GTM/Pricing", "Leadership", "Board"];
const STAGES = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

/* ── Two datasets, switchable via the bottom-left toggle ──────────────────
   PLACEHOLDER : blank slots showing where verified stories go.
   DRAFT       : real material drafted from member intro-call transcripts
                 (Lana Feng, Lawrence Coburn). Every item is unverified and
                 stamped "Draft · pending member approval". Outcomes are NOT
                 fabricated — where the room hasn't yet changed the decision,
                 the result reads "Outcome pending". Do not publish before review. */

const PLACEHOLDER = {
  pending: "Pending proof review",
  featured: {
    decision: "Fundraising",
    stage: "Stage 2",
    roomShort: "Same-stage fundraising room",
    carried: "[Placeholder] A founder carried a bridge-vs-cut decision they'd been circling for weeks — convinced the only question was how to raise.",
    room: "[Placeholder] In a same-stage fundraising room, two founders who'd run the exact play a year ahead reframed the problem entirely.",
    shift: "[Placeholder] The decision changed from 'raise a bridge' to 'fund a narrower bet, on a clear deadline.' The founder left with a next step, not encouragement.",
    record: [["Window", "[Placeholder] Decision was live"], ["Outcome", "[Placeholder] Reframed + committed next step"]]
  },
  stories: [{
    decision: "Fundraising",
    stage: "Stage 2",
    carried: "[Placeholder] A founder weighing a bridge round against a harder cut.",
    room: "Same-stage fundraising room",
    shift: "[Placeholder] Reframed the question from 'how do we raise' to 'what are we actually funding.'"
  }, {
    decision: "Hiring",
    stage: "Stage 3",
    carried: "[Placeholder] First VP hire that would outrank the founding team.",
    room: "Stage 3 leadership room",
    shift: "[Placeholder] Changed the scorecard before opening the search."
  }, {
    decision: "GTM/Pricing",
    stage: "Stage 2",
    carried: "[Placeholder] A repricing that risked the strongest accounts.",
    room: "GTM room",
    shift: "[Placeholder] Sequenced the change to protect the base."
  }, {
    decision: "Leadership",
    stage: "Stage 4",
    carried: "[Placeholder] A team that had stopped pushing back.",
    room: "Stage 4 founder room",
    shift: "[Placeholder] Designed dissent back into the operating cadence."
  }, {
    decision: "Board",
    stage: "Stage 3",
    carried: "[Placeholder] A board meeting that had become a status report.",
    room: "Board-dynamics room",
    shift: "[Placeholder] Restructured the agenda around live decisions."
  }, {
    decision: "Hiring",
    stage: "Stage 1",
    carried: "[Placeholder] An early mis-hire the founder kept defending.",
    room: "Stage 1 room",
    shift: "[Placeholder] Named the cost honestly and acted within the week."
  }],
  patterns: [{
    icon: "users",
    title: "[Placeholder] Decisions reframed, not just validated",
    body: "A recurring pattern: founders arrive with the wrong question and leave with a sharper one."
  }, {
    icon: "clock",
    title: "[Placeholder] Movement while the call is still live",
    body: "Impact shows up as action taken inside the window the decision actually mattered."
  }, {
    icon: "check-circle",
    title: "[Placeholder] A next step on the record",
    body: "Stories consistently end with a concrete commitment, captured and followed up."
  }]
};
const DRAFT = {
  pending: "Draft · pending member approval",
  featured: {
    decision: "GTM/Pricing",
    stage: "Stage 2",
    roomShort: "GTM / pricing room",
    source: "Drafted from L. Coburn intro call · unverified",
    carried: "[Draft] A founder running a highly technical infrastructure sale (tooling for Claude customers) watched deals stall on one objection — 'won't the model vendor just build this?' — while the team gave away high-value AI consulting (custom workflows, training, strategy) free to ~150 customers.",
    room: "[Draft] The decision he's bringing to the room: how to package and price the advisory work as its own offer without slowing the core product — and how to turn the member base into a real distribution channel.",
    shift: "Outcome pending — founder has launched a separate paid brand independently; the room's input on pricing and peer distribution is in progress. Not cleared for publication.",
    record: [["Window", "Decision live now"], ["Outcome", "Pending — story in progress"]]
  },
  stories: [{
    decision: "Fundraising",
    stage: "Stage 2",
    source: "L. Feng intro call · unverified",
    carried: "[Draft] Kicked off a raise for an AI platform aimed at energy / oil & gas. Bay Area VCs didn't understand the wedge — 'we don't know this space, we'll wait.'",
    room: "Fundraising / investor-fit room",
    shift: "[Draft] Working thesis: target sector-native oil & gas investors in Houston via advisors rather than generalist Bay Area capital. Outcome pending approval."
  }, {
    decision: "GTM/Pricing",
    stage: "Stage 2",
    source: "L. Feng intro call · unverified",
    carried: "[Draft] Where to stand up the go-to-market team for a sector-specific AI platform — near the customers and investors who understand it.",
    room: "GTM room",
    shift: "[Draft] Leaning toward building GTM in-region (Houston) rather than at HQ. Outcome pending approval."
  }, {
    decision: "GTM/Pricing",
    stage: "Stage 2",
    source: "L. Coburn intro call · unverified",
    carried: "[Draft] The team was pulled into AI consulting (workflows, training, strategy) and doing most of it for free across ~150 customers.",
    room: "GTM / pricing room",
    shift: "[Draft] Productizing the advisory work as a separate paid offer. Early demand strong; pricing model under review. Pending approval."
  }, {
    decision: "Leadership",
    stage: "Stage 2",
    source: "L. Coburn intro call · unverified",
    carried: "[Draft] How to make the member network 'go to work for each other' — peer-to-peer distribution like the YC effect, deliberately rather than by luck.",
    room: "Founder-community / GTM room",
    shift: "[Draft] Exploring structured peer-distribution inside the network. Outcome pending approval."
  }, {
    decision: "Fundraising",
    stage: "Stage 3",
    source: "L. Feng intro call · unverified",
    carried: "[Draft] A serial founder (prior companies acquired by Becton Dickinson and Novartis) translating deep life-sciences credibility into a new, unfamiliar sector.",
    room: "Fundraising / positioning room",
    shift: "[Draft] Sharpening the 'why this wedge, why now' narrative for sector investors. Outcome pending approval."
  }, {
    decision: "Leadership",
    stage: "Stage 2",
    source: "A. Cai intro call · unverified",
    carried: "[Draft] A Bay Area AI founder who values in-person founder density over Zoom — weighing how to get more signal from the network.",
    room: "In-person founder room",
    shift: "[Draft] Prioritizing in-person sessions for higher-trust input. Outcome pending approval."
  }],
  patterns: [{
    icon: "trending-up",
    title: "[Draft] Sector-fit can beat brand-name capital",
    body: "Recurring in drafts: founders re-target investors who natively understand the wedge instead of chasing generalist logos. Pending review."
  }, {
    icon: "briefcase",
    title: "[Draft] Charging for what you give away free",
    body: "A common live decision: productizing high-value advisory work the team was doing for free. Pending review."
  }, {
    icon: "users",
    title: "[Draft] In-person density compounds",
    body: "Members repeatedly weight real, in-room founder contact over remote contact. Pending review."
  }]
};

/* MEMBERS : VERIFIED testimonials the team produced (real names, titles,
   companies, quotes, and photos). Every carried→room→shift is derived directly
   from the member's own words — nothing invented. Cleared as published testimonial. */
const M = `${ASSET}/images/members`;
const MEMBERS = {
  pending: "Verified member testimonial",
  verified: true,
  featured: {
    decision: "Reading customer signals",
    roomShort: "Founder conversations + group",
    stage: null,
    photo: `${M}/gayathri-feature.jpg`,
    name: "Gayathri Venkataraman",
    title: "CEO, GeoProspex.ai",
    quote: "Clarity is the biggest thing from this entire FounderNexus group.",
    carried: "“I always wonder — am I on the right track?” Gayathri needed to know whether she was reading her customer signals correctly, and whether her hypothesis and direction held up.",
    room: "Several conversations with Court and the FounderNexus group on which signals to weigh and where to double-check her hypothesis.",
    shift: "Clarity on her direction. In her words: “Clarity is the biggest thing from this entire FounderNexus group.”",
    record: [["Focus", "Direction-setting"], ["Outcome", "Clarity on hypothesis & direction"]]
  },
  stories: [{
    photo: `${M}/gayathri.jpg`,
    name: "Gayathri Venkataraman",
    title: "CEO, GeoProspex.ai",
    decision: "Customer signals",
    stage: null,
    quote: "Clarity is the biggest thing from this entire FounderNexus group.",
    carried: "Am I on the right track? Are my customer signals telling me what I think they are?",
    room: "Conversations with Court and the group on which signals to weigh.",
    shift: "“Clarity is the biggest thing from this entire FounderNexus group.”"
  }, {
    photo: `${M}/jasper.jpg`,
    name: "Jasper Kuria",
    title: "Co-Founder, ConversionMagic",
    decision: "Access",
    stage: null,
    quote: "It's really a shortcut to getting very high-quality access.",
    carried: "Building a high-quality founder network for a scalable software startup — without spending years on it.",
    room: "The three events and the access FounderNexus opens up.",
    shift: "“It will take you years to build your network to that level… it's really a shortcut to getting very high-quality access.”"
  }, {
    photo: `${M}/ken.jpg`,
    name: "Ken Aragon",
    title: "CEO, Viata",
    decision: "Candor",
    stage: null,
    quote: "You're going to have those real conversations.",
    carried: "Wanting honest signal on whether an idea actually has legs — not flattery.",
    room: "A curated core of experienced founders who've all seen some success.",
    shift: "“The people are very high quality… they're not going to beat around the bush… you're going to have those real conversations.”"
  }],
  patterns: [{
    icon: "check-circle",
    title: "Clarity on direction",
    body: "“Clarity is the biggest thing from this entire FounderNexus group.” — Gayathri Venkataraman, CEO, GeoProspex.ai"
  }, {
    icon: "users",
    title: "High-quality access, faster",
    body: "“It will take you years to build your network to that level… a shortcut to very high-quality access.” — Jasper Kuria, Co-Founder, ConversionMagic"
  }, {
    icon: "message-circle",
    title: "Real, matter-of-fact conversations",
    body: "“The people are very high quality… you're going to have those real conversations.” — Ken Aragon, CEO, Viata"
  }]
};
const DATASETS = {
  placeholder: PLACEHOLDER,
  draft: DRAFT,
  members: MEMBERS
};
let DATA = PLACEHOLDER; // set per-render by StoriesPage
let PENDING = DATA.pending;

/* Attribution — real named member (photo) when verified, else a pending badge. */
function Attribution({
  s
}) {
  if (s && s.photo) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: s.photo,
      name: s.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.25,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--fw-semibold) 13px/1.2 var(--font-sans)",
        color: "var(--navy-900)",
        whiteSpace: "nowrap"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--text-meta)",
        color: "var(--gray-500)",
        whiteSpace: "nowrap"
      }
    }, s.title)), DATA.verified && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check-circle",
      size: "sm"
    }, "Verified")));
  }
  return /*#__PURE__*/React.createElement(Badge, {
    tone: DATA.verified ? "success" : "neutral",
    dot: true
  }, PENDING);
}

/* In their words — verified quote band (real faces + verified quotes). */
function MembersVoices() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gray-50)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "In members' words \xB7 verified"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 30px/1.15 var(--font-display)",
      letterSpacing: "-0.015em",
      color: "var(--navy-900)",
      margin: 0,
      maxWidth: 640
    }
  }, "Real founders, on the record."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 36
    }
  }, MEMBERS.stories.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    padding: "none",
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: `url(${s.photo}) center 18%/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 20px",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 22,
    color: "var(--blue-300)",
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-semibold) 18px/1.4 var(--font-display)",
      letterSpacing: "-0.01em",
      color: "var(--navy-900)",
      margin: 0,
      flex: 1
    }
  }, "\u201C", s.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 14px/1.2 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, s.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "check-circle",
    size: "sm"
  }, "Verified"))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginTop: 18
    }
  }, "Sourced from recorded member testimonials. Titles and companies as stated by each member.")));
}

/* ===================================================== shared blocks ===== */
function TitleBlock({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Stories \xB7 proof of decision quality"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) 50px/1.05 var(--font-display)",
      letterSpacing: "-0.025em",
      color: "var(--navy-900)",
      maxWidth: 820,
      margin: 0
    }
  }, "Decisions changed in the room \u2014 not praise for the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 19px/1.6 var(--font-sans)",
      color: "var(--gray-600)",
      maxWidth: 640,
      margin: "18px 0 0"
    }
  }, "Proof, the way FounderNexus measures it: the decision a founder carried, the room they brought it to, and what changed as a result. ", note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: 22,
      background: "var(--blue-50)",
      border: "1px solid var(--blue-200)",
      borderRadius: "var(--radius-md)",
      padding: "9px 14px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 16,
    color: "var(--blue-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--navy-800)"
    }
  }, DATA.verified ? "Verified member testimonials — real founders, real quotes, on the record. Photos and titles as provided by each member." : DATA.pending.startsWith("Draft") ? "Draft content from member transcripts — unverified, shown to map real material into the layout. Nothing here is cleared for publication." : "Every story below is a labeled placeholder. Verified stories appear only after internal proof review.")));
}
function ArcStep({
  n,
  label,
  body,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--blue-500)",
      color: "#fff",
      font: "var(--fw-bold) 13px/1 var(--font-sans)",
      flex: "none"
    }
  }, n), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      flex: 1,
      background: "var(--blue-200)",
      marginTop: 6,
      minHeight: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 16px/1.55 var(--font-sans)",
      color: "var(--navy-800)",
      margin: 0
    }
  }, body)));
}

/* ============================================ DIRECTION A — decision arc === */
function FeaturedArc() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: `linear-gradient(160deg, rgba(1,5,42,0.20), rgba(1,5,42,0.72)), url(${DATA.featured.photo || `${ASSET}/images/landing-pages/founders-working.jpg`}) center ${DATA.featured.photo ? "15%" : "center"}/cover`,
      minHeight: 380,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "feature",
    style: {
      alignSelf: "flex-start",
      marginBottom: "auto"
    }
  }, "Featured story"), DATA.featured.name && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 18px/1.2 var(--font-sans)"
    }
  }, DATA.featured.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      opacity: 0.85
    }
  }, DATA.featured.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, null, DATA.featured.decision), DATA.featured.stage && /*#__PURE__*/React.createElement(Chip, {
    outline: true,
    style: {
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      borderColor: "rgba(255,255,255,0.4)"
    }
  }, DATA.featured.stage))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 44px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ArcStep, {
    n: 1,
    label: "The decision carried",
    body: DATA.featured.carried
  }), /*#__PURE__*/React.createElement(ArcStep, {
    n: 2,
    label: "The room",
    body: DATA.featured.room
  }), /*#__PURE__*/React.createElement(ArcStep, {
    n: 3,
    label: "What changed",
    body: DATA.featured.shift,
    last: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Attribution, {
    s: DATA.featured
  }))))));
}
function StoryCardArc({
  s
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "lg",
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    iconLeft: "briefcase"
  }, s.decision), s.stage && /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, s.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--blue-600)",
      marginBottom: 4
    }
  }, "CARRIED"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 16px/1.4 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, s.carried)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, s.room)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--blue-600)",
      marginBottom: 4
    }
  }, "WHAT CHANGED"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-700)"
    }
  }, s.shift))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Attribution, {
    s: s
  })));
}
function DirectionA() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "Each story follows the same arc: carried \u2192 room \u2192 changed."
  }), /*#__PURE__*/React.createElement(FeaturedArc, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "44px 40px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 24px/1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.01em"
    }
  }, "More decisions, more rooms"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)"
    }
  }, "Filter by decision or stage once stories are verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, DATA.stories.map((s, i) => /*#__PURE__*/React.createElement(StoryCardArc, {
    key: i,
    s: s
  })))));
}

/* ============================================ DIRECTION B — proof ledger == */
function FeaturedLedger() {
  const rows = [["Decision", DATA.featured.decision], ["Stage", DATA.featured.stage], ["Room", DATA.featured.roomShort || "Stage-matched room"], ...DATA.featured.record, ["Status", PENDING]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "44px 48px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "feature",
    style: {
      marginBottom: 22
    }
  }, "Featured story"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, [["The decision carried", DATA.featured.carried], ["The room", DATA.featured.room], ["What changed", DATA.featured.shift]].map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 8
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 17px/1.55 var(--font-sans)",
      color: "var(--navy-800)",
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--blue-50)",
      borderLeft: "1px solid var(--blue-200)",
      padding: "44px 36px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      marginBottom: 16
    }
  }, "PROOF RECORD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 0",
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--blue-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 14px/1.4 var(--font-sans)",
      color: "var(--navy-900)",
      textAlign: "right",
      maxWidth: 180
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    iconRight: "arrow-up-right"
  }, "Read the full record"))))));
}
function StoryCardLedger({
  s
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, null, s.decision), s.stage && /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, s.stage)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 18,
    color: "var(--gray-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 17px/1.4 var(--font-sans)",
      color: "var(--navy-900)",
      margin: "16px 0 10px"
    }
  }, s.carried), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--text-body-sm)",
      color: "var(--gray-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--blue-500)"
    }
  }), s.shift), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Attribution, {
    s: s
  })));
}
function DirectionB() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "Read as a record: the narrative on the left, the verifiable facts on the right."
  }), /*#__PURE__*/React.createElement(FeaturedLedger, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "44px 40px 16px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 24px/1 var(--font-display)",
      color: "var(--navy-900)",
      letterSpacing: "-0.01em",
      marginBottom: 22
    }
  }, "The proof ledger"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, DATA.stories.map((s, i) => /*#__PURE__*/React.createElement(StoryCardLedger, {
    key: i,
    s: s
  })))));
}

/* ======================================= DIRECTION C — impact patterns first */
function DirectionC() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleBlock, {
    note: "Documented patterns first, then the individual stories behind them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 44px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 12px/1 var(--font-sans)",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--blue-300)"
    }
  }, "Documented-impact patterns"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 28px/1.2 var(--font-display)",
      color: "#fff",
      letterSpacing: "-0.015em",
      margin: "10px 0 0",
      maxWidth: 560
    }
  }, "What recurs across rooms, stated as patterns \u2014 never as headline metrics.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 1,
      background: "rgba(255,255,255,0.1)",
      marginTop: 28
    }
  }, DATA.patterns.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      background: "var(--navy-700)",
      padding: "28px 28px 34px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22,
    color: "var(--blue-300)",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 16px/1.35 var(--font-sans)",
      color: "#fff",
      marginBottom: 8
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-300)",
      margin: 0
    }
  }, p.body)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "44px 40px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "feature",
    style: {
      alignSelf: "flex-start",
      marginBottom: 18
    }
  }, "Featured story"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Chip, null, DATA.featured.decision), DATA.featured.stage && /*#__PURE__*/React.createElement(Chip, {
    outline: true
  }, DATA.featured.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [["Carried", DATA.featured.carried], ["Room", DATA.featured.room], ["Changed", DATA.featured.shift]].map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--blue-600)",
      paddingTop: 3
    }
  }, h.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 16px/1.5 var(--font-sans)",
      color: "var(--navy-800)"
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Attribution, {
    s: DATA.featured
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, DATA.stories.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    size: "s"
  }, s.decision), s.stage && /*#__PURE__*/React.createElement(Chip, {
    size: "s",
    outline: true
  }, s.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 15px/1.4 var(--font-sans)",
      color: "var(--navy-900)"
    }
  }, s.carried), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--gray-600)",
      marginTop: 6
    }
  }, s.shift), s.photo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Attribution, {
    s: s
  }))))))));
}

/* ===================================================== CTA + switcher ===== */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 40px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      background: "linear-gradient(135deg, var(--blue-500), var(--blue-action))",
      borderRadius: "var(--radius-3xl)",
      padding: "56px 52px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 34px/1.12 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "The proof you'll trust most is your own decision, changed."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 17px/1.6 var(--font-sans)",
      margin: "12px 0 0",
      opacity: 0.92
    }
  }, "Bring a live decision to a stage-matched room and see what the room does with it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    style: {
      background: "#fff"
    }
  }, "Apply for membership"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "#fff"
    },
    iconRight: "arrow-right"
  }, "Experience a room"))));
}
const DIRECTIONS = [{
  id: "A",
  label: "A · Decision arc",
  render: /*#__PURE__*/React.createElement(DirectionA, null)
}, {
  id: "B",
  label: "B · Proof ledger",
  render: /*#__PURE__*/React.createElement(DirectionB, null)
}, {
  id: "C",
  label: "C · Impact patterns",
  render: /*#__PURE__*/React.createElement(DirectionC, null)
}];
function Switcher({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 200,
      display: "flex",
      gap: 4,
      background: "var(--navy-900)",
      padding: 5,
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-xl)"
    }
  }, DIRECTIONS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => onChange(d.id),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      background: value === d.id ? "var(--blue-500)" : "transparent",
      color: value === d.id ? "#fff" : "var(--gray-300)"
    }
  }, d.label)));
}
function DatasetToggle({
  value,
  onChange
}) {
  const opts = [{
    id: "placeholder",
    label: "Placeholder"
  }, {
    id: "draft",
    label: "Draft"
  }, {
    id: "members",
    label: "Members ✓"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 20,
      left: 24,
      zIndex: 200,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta)",
      color: "var(--gray-500)",
      paddingLeft: 6
    }
  }, "CONTENT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      padding: 5,
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-lg)"
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => onChange(o.id),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      background: value === o.id ? "var(--blue-500)" : "transparent",
      color: value === o.id ? "#fff" : "var(--gray-600)"
    }
  }, o.label))));
}
function StoriesPage() {
  const [dir, setDir] = React.useState("A");
  const [dataset, setDataset] = React.useState("placeholder");
  DATA = DATASETS[dataset]; // set before children render
  PENDING = DATA.pending;
  const current = DIRECTIONS.find(d => d.id === dir);
  const isDraft = dataset === "draft";
  const isMembers = dataset === "members";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoBase: `${ASSET}/logos`,
    active: "Stories",
    links: [{
      label: "How it works"
    }, {
      label: "Insights"
    }, {
      label: "Stories"
    }, {
      label: "Events"
    }],
    secondaryLabel: "Sign in",
    ctaLabel: "Apply now"
  }), isDraft && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FEF6E0",
      borderBottom: "1px solid #F3D98B",
      padding: "10px 40px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 16,
    color: "#B25E09"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 13px/1.4 var(--font-sans)",
      color: "#7A4A06"
    }
  }, "Internal draft \u2014 content derived from member intro-call transcripts, ", /*#__PURE__*/React.createElement("strong", null, "not verified and not cleared for publication"), ". Outcomes are marked pending where the room hasn't yet changed the decision.")), isMembers && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--status-success-bg)",
      borderBottom: "1px solid #BFE6CE",
      padding: "10px 40px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 16,
    color: "var(--status-success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 13px/1.4 var(--font-sans)",
      color: "#14683C"
    }
  }, "Verified member testimonials \u2014 real founders, real quotes, with photos. Cleared for use.")), React.cloneElement(current.render, {
    dataset
  }), isMembers && /*#__PURE__*/React.createElement(MembersVoices, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(DatasetToggle, {
    value: dataset,
    onChange: setDataset
  }), /*#__PURE__*/React.createElement(Switcher, {
    value: dir,
    onChange: setDir
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(StoriesPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stories/Stories.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Steps = __ds_scope.Steps;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
