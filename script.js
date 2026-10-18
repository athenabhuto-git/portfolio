// Fill these in after you create your GitHub account and repos.
// Anything left empty is hidden automatically, so the page never shows a dead link.
const CONFIG = {
  githubProfile: "https://github.com/athenabhuto-git",
  projects: {
    sentiment: { repo: "", demo: "" }, // Multimodal Sentiment Analysis System
    portal:    { repo: "", demo: "" }  // RSET Internship Cell Portal
  }
};

(function () {
  if (CONFIG.githubProfile) {
    const a = document.querySelector("[data-github-profile]");
    if (a) {
      a.href = CONFIG.githubProfile;
      a.hidden = false;
    }
  }

  document.querySelectorAll("[data-links]").forEach(function (box) {
    const p = CONFIG.projects[box.dataset.links];
    if (!p) return;
    [["repo", "View code"], ["demo", "Live demo"]].forEach(function (pair) {
      if (!p[pair[0]]) return;
      const a = document.createElement("a");
      a.href = p[pair[0]];
      a.textContent = pair[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      box.appendChild(a);
    });
  });

  // Show the portrait only if photo.jpg exists in the repo.
  const portrait = document.getElementById("portrait");
  if (portrait) {
    const img = portrait.querySelector("img");
    const hide = function () {
      portrait.remove();
      const wrap = document.querySelector(".about-wrap");
      if (wrap) wrap.classList.add("no-photo");
    };
    if (img.complete && img.naturalWidth === 0) hide();
    else img.addEventListener("error", hide);
  }
})();
