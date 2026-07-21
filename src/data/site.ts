const rawOrigin = import.meta.env.PUBLIC_SITE_URL || "https://skola-fudbala-eleven.example";

export const siteOrigin = rawOrigin.replace(/\/+$/, "");

export function buildUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${normalizedPath}`;
}
