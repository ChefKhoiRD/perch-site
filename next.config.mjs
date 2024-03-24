/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'akamai',
        path: '',
      },
    basePath: '/perch-site'
};

export default nextConfig;
