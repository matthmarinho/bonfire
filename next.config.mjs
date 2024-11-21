/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirects: async () => [
  //   {
  //     source: '/',
  //     destination: '/grimoire',
  //     permanent: true,
  //   },
  // ],
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
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'isimkihwarvgadsudnua.supabase.co',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;