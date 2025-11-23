function enterForge() {
  window.location.href = "architects-codex.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const yearSpans = document.querySelectorAll("#year");
  yearSpans.forEach((span) => {
    span.textContent = new Date().getFullYear();
  });
});
