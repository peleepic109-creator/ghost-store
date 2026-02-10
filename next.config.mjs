/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google Profile Pictures
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash Images
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com', // Firebase Assets
      }
    ],
  },
};

export default nextConfig;
