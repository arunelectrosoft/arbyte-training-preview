(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    if (!window.mermaid) return;
    window.mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "default", flowchart: { useMaxWidth: true, htmlLabels: false } });
    window.mermaid.run({ querySelector: ".mermaid" });
  });
}());
