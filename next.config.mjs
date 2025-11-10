/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// const repoBasePath = '/flatlatte-next';
// const repoAssetPrefix = '/flatlatte-next/';


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
