// next-sitemap docs: https://github.com/iamvishnusankar/next-sitemap

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://pixel.is-a.dev",
  generateRobotsTxt: true,
};
