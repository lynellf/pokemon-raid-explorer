/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // <html> elements must have a lang attribute
  // https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI
  // API Ref https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  }
};

module.exports = nextConfig;
