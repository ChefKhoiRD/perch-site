/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'akamai',
        path: '',
      },
    assetPrefix: './',
    basePath: '/perch-site',
    reactStrictMode: true
};

export default nextConfig;
