export const routes = [
  { path: "/", key: "home" },
  { path: "/projects", key: "projects" },
  { path: "/background", key: "background" },
  { path: "/about", key: "about" },
];

export function getPageKey(pathname) {
  return routes.find((route) => route.path === pathname)?.key ?? "home";
}
