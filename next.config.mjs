/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      domains: ['cdn.prod.website-files.com',
         'admin.eazisols.com'
      ],
    
  },
};

export default nextConfig;
