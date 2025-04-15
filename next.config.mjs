/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    "REACT_APP_SERVER_URI":'http://localhost:8888'
  },
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      }, {
        protocol: 'https',
        hostname: 'quizzysocialgallery.com',
      }
    ],
  },
};

export default nextConfig;
