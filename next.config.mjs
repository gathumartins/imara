/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.admin.imarafellowship.org",
            }, {
                protocol: "https",
                hostname: "localhost:3000",
            }
        ],
    },
    };

export default nextConfig;
