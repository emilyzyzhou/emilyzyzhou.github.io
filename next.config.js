/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required to generate a static site
  images: {
    unoptimized: true, // disables next/image optimization since GH Pages can't handle it
  },
  basePath: '', // leave empty since you're using a user site, not a subpath
  assetPrefix: '',
};

module.exports = nextConfig;
