/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/flatlatte-next' : '',
  assetPrefix: isProd ? '/flatlatte-next/' : '',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
