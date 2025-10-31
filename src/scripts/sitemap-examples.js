// Example ------------------
export const exampleSitemap = {
  "/": {
    title: "Home",
    parent: null,
  },
  "/page/": {
    title: "Page",
    parent: "/",
  },
  "/page/subpage/": {
    title: "Subpage",
    parent: "/page",
  },
};

// Core 2.0 Sitemap --------------
export const demoPages = {
  // Home
  "/": {
    title: "Home",
    parent: null,
  },
  "/demo/": {
    title: "Demo",
    parent: "/",
  },
  "/demo/footer/": {
    title: "Footer",
    parent: "/demo/",
  },
  "/demo/footer/test/": {
    title: "Test",
    parent: "/demo/footer/",
  },
};

// Security and Privacy Center -------------
export const sitemap = {
  "https://www.firstam.com/": {
    title: "Fist American",
    parent: null,
  },
  "/": {
    title: "Security and Privacy",
    parent: "https://www.firstam.com/",
  },
  "/digital-security/": {
    title: "Digital Security",
    parent: "/",
  },
  "/digital-security/be-cyber-smart/": {
    title: "Be Cyber Smart",
    parent: "/",
  },
};
