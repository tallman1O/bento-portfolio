/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["cdn.jsdelivr.net", "cdn.simpleicons.org", "skillicons.dev", "img.icons8.com", "apod.nasa.gov", "i.scdn.co", "images.unsplash.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
