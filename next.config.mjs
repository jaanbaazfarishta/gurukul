/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'platform-lookaside.fbsbx.com',
            port: '',
          },
        ],
      },
  };
  
  export default nextConfig;