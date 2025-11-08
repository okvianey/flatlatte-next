/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // Para custom domain puede estar vacío
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
