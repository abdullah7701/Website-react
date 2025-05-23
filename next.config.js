/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Keep if using App Router
    // Comment out or remove these
    // serverComponentsExternalPackages: [
    //   "puppeteer",
    //   "puppeteer-core",
    //   "@sparticuz/chromium",
    // ],
    // esmExternals: "loose",
  },
};

module.exports = nextConfig;