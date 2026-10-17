// Every public page (docs/site-conventions.md §6, in Pilot Light): Pilot Light
// reads them as Lena's knowledge. The API is left out.

import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kindlingdigital.org").replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/services",
    "/pilot-light",
    "/pricing",
    "/about",
    "/portfolio",
    "/reviews",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/client-data-agreement",
  ].map((path) => ({ url: `${SITE_URL}${path}` }));
}
