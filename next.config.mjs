/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-sa-east-1.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },
};

export default nextConfig;