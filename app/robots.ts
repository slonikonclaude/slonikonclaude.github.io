import type { MetadataRoute } from "next";
import { IS_PREVIEW, SITE_URL } from "@/content/data";

/**
 * Required by `output: "export"`: metadata routes are treated as dynamic
 * handlers by default, and a static export has no server to run them on.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // A client-review build must not be crawled — see IS_PREVIEW in content/data.ts.
  if (IS_PREVIEW) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
