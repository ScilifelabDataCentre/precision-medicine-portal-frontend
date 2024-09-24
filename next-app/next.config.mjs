/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/about',
            destination: '/about/product',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;