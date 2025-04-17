import type { NextConfig } from 'next';

const nextConfig = {
  redirects: async () => [{ destination: '/home', permanent: true, source: '/' }],
  turbopack: { rules: { '*.svg': { as: '*.js', loaders: ['@svgr/webpack'] } } },
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });

    return config;
  }
} satisfies NextConfig;

export default nextConfig;
