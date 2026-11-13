if (window.location.protocol === "file:") {
  const localPages = {
    "blog/": "blog.html",
    "advanced-amino-formula-review/": "AdvancedBionutritionalsReview.html",
    "josephs-well-air-fountain-review/": "josephWell.html",
    "medicinal-garden-kit-review/": "medicalGardenKit.html",
    "self-sufficient-backyard-review/": "selfSufficientYard.html",
  };

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && localPages[href]) {
      link.setAttribute("href", localPages[href]);
    }
  });

  const frontMatter = Array.from(document.body.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.includes("---") &&
      node.textContent.includes("permalink:"),
  );
  frontMatter?.remove();
}
