const chaiStyle = {
  //  Padding
  "chai-p-1": { padding: "4px" },
  "chai-p-2": { padding: "8px" },
  "chai-p-3": { padding: "12px" },
  "chai-p-4": { padding: "16px" },
  "chai-px-2": { paddingLeft: "8px", paddingRight: "8px" },
  "chai-px-4": { paddingLeft: "16px", paddingRight: "16px" },
  "chai-py-2": { paddingTop: "8px", paddingBottom: "8px" },
  "chai-py-4": { paddingTop: "16px", paddingBottom: "16px" },

  //  Margin
  "chai-mt-2": { marginTop: "8px" },
  "chai-mt-4": { marginTop: "16px" },
  "chai-mt-6": { marginTop: "24px" },
  "chai-mb-2": { marginBottom: "8px" },
  "chai-mb-4": { marginBottom: "16px" },

  // Font Size
  "chai-text-xs": { fontSize: "11px" },
  "chai-text-sm": { fontSize: "13px" },
  "chai-text-md": { fontSize: "15px" },
  "chai-text-lg": { fontSize: "18px" },
  "chai-text-xl": { fontSize: "22px" },
  "chai-text-2xl": { fontSize: "28px" },

  //Font Weight
  "chai-font-normal": { fontWeight: "400" },
  "chai-font-medium": { fontWeight: "500" },
  "chai-font-semibold": { fontWeight: "600" },
  "chai-font-bold": { fontWeight: "700" },

  // Line Height
  "chai-leading-tight": { lineHeight: "1.25" },
  "chai-leading-normal": { lineHeight: "1.5" },
  "chai-leading-loose": { lineHeight: "1.75" },

  // Letter Spacing
  "chai-tracking-tight": { letterSpacing: "-0.02em" },
  "chai-tracking-wide": { letterSpacing: "0.08em" },

  // Text Color
  "chai-text-white": { color: "#ffffff" },
  "chai-text-blue": { color: "#3b82f6" },
  "chai-text-green": { color: "#22c55e" },
  "chai-text-red": { color: "#ef4444" },
  "chai-text-gray": { color: "#9ca3af" },
  "chai-text-muted": { color: "#6b7280" },

  // Background
  "chai-bg-indigo": { backgroundColor: "#6366f1" },
  "chai-bg-green": { backgroundColor: "#22c55e" },
  "chai-bg-red": { backgroundColor: "#ef4444" },
  "chai-bg-blue": { backgroundColor: "#3b82f6" },
  "chai-bg-card": { backgroundColor: "#1a1a22" },
  "chai-bg-surface": { backgroundColor: "#141418" },
  "chai-bg-dark": { backgroundColor: "#0d0d0f" },

  //  Border Radius
  "chai-rounded-sm": { borderRadius: "3px" },
  "chai-rounded": { borderRadius: "6px" },
  "chai-rounded-lg": { borderRadius: "12px" },
  "chai-rounded-xl": { borderRadius: "18px" },
  "chai-rounded-full": { borderRadius: "9999px" },

  //  Border
  "chai-border": { border: "1px solid #2a2a38" },
  "chai-border-blue": { border: "1px solid #3b82f6" },
  "chai-border-green": { border: "1px solid #22c55e" },

  //List
  "chai-list-style": { paddingLeft: "18px" },

  //  Display
  "chai-block": { display: "block" },
  "chai-inline-block": { display: "inline-block" },
  "chai-flex": { display: "flex" },
  "chai-inline-flex": { display: "inline-flex" },
  "chai-hidden": { display: "none" },

  //  Flex
  "chai-items-center": { alignItems: "center" },
  "chai-justify-center": { justifyContent: "center" },
  "chai-gap-2": { gap: "8px" },
  "chai-gap-4": { gap: "16px" },
  "chai-flex-wrap": { flexWrap: "wrap" },

  // Width
  "chai-w-full": { width: "100%" },
  "chai-w-half": { width: "50%" },

  // Text Align
  "chai-text-left": { textAlign: "left" },
  "chai-text-center": { textAlign: "center" },
  "chai-text-right": { textAlign: "right" },

  // Overflow
  "chai-overflow-hidden": { overflow: "hidden" },

  // Opacity
  "chai-opacity-50": { opacity: "0.5" },
  "chai-opacity-75": { opacity: "0.75" },

  //Cursor ─
  "chai-pointer": { cursor: "pointer" },
  "chai-not-allowed": { cursor: "not-allowed" },

  //  Special Compound Style
  //
  "chai-tag-outline": {
    border: "1px solid #3a3a50",
    borderRadius: "4px",
    padding: "2px 8px",
    backgroundColor: "transparent",
    color: "#9ca3af",
    display: "inline-block",
  },

  "chai-disabled": {
    opacity: "0.4",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "chai-code": {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "12px",
    backgroundColor: "#1a1a22",
    border: "1px solid #2a2a38",
    padding: "2px 6px",
    borderRadius: "4px",
    color: "#a5b4fc",
  },
};

const elements = document.querySelectorAll(".chai");

elements.forEach(function (element) {
  const classNames = Array.from(element.classList);

  classNames.forEach(function (className) {
    if (className === "chai") return;

    if (chaiStyle[className]) {
      const styles = chaiStyle[className];
      for (let property in styles) {
        element.style[property] = styles[property];
      }
    }

    element.classList.remove(className);
  });
});
