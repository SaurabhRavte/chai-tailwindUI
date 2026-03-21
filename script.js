const chaiStyle = {
  // Padding
  "chai-p-1": { padding: "4px" },
  "chai-p-2": { padding: "8px" },
  "chai-p-3": { padding: "12px" },
  "chai-p-4": { padding: "16px" },

  // Margin top
  "chai-mt-2": { marginTop: "8px" },
  "chai-mt-4": { marginTop: "16px" },
  "chai-mt-6": { marginTop: "24px" },

  // Font size
  "chai-text-xs": { fontSize: "11px" },
  "chai-text-sm": { fontSize: "13px" },
  "chai-text-md": { fontSize: "15px" },
  "chai-text-xl": { fontSize: "22px" },

  // Font weight
  "chai-font-bold": { fontWeight: "700" },

  // Text color
  "chai-text-white": { color: "#ffffff" },
  "chai-text-blue": { color: "#3b82f6" },
  "chai-text-green": { color: "#22c55e" },
  "chai-text-red": { color: "#ef4444" },
  "chai-text-gray": { color: "#9ca3af" },

  // Background
  "chai-bg-indigo": { backgroundColor: "#6366f1" },
  "chai-bg-green": { backgroundColor: "#22c55e" },
  "chai-bg-red": { backgroundColor: "#ef4444" },
  "chai-bg-card": { backgroundColor: "#1e1e2e" },
  "chai-bg-surface": { backgroundColor: "#2a2a3c" },

  // Border radius
  "chai-rounded": { borderRadius: "6px" },
  "chai-rounded-full": { borderRadius: "9999px" },

  // Display
  "chai-block": { display: "block" },
  "chai-flex": { display: "flex" },

  // Flex helpers
  "chai-gap-2": { gap: "8px" },

  // Width
  "chai-w-full": { width: "100%" },

  // Cursor
  "chai-pointer": { cursor: "pointer" },
};

// Engine
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
