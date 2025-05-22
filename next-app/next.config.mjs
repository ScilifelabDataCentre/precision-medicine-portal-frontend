/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/about',
            destination: '/about/dsnpmd-projects',
            permanent: true,
          },
        ]
    },
    output: 'standalone',
  };

export default nextConfig;