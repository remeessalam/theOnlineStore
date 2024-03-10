// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost", "prod-img.thesouledstore.com"],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Define the hostname property for each remote pattern
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "prod-img.thesouledstore.com" }
    ],
  },
};

export default nextConfig;
