import type { NextConfig } from "next";

/**
 * GitHub Pages serves plain files — there is no Node server, so the whole site
 * is pre-rendered to static HTML at build time.
 *
 * - `output: "export"` writes the site to `out/`.
 * - `trailingSlash` turns every route into a real `index.html` inside a folder,
 *   which is what Pages resolves most reliably.
 * - `images.unoptimized` is required: `/_next/image` needs a running server.
 *
 * The old `redirects()` block was dropped — rewrites/redirects are server
 * features and are silently ignored by `output: "export"`. The bare `/` → `/es`
 * hop now lives in `public/index.html` as a meta-refresh instead.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
