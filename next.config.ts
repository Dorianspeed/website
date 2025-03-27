import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { turbo: { rules: { '*.svg': { as: '*.js', loaders: ['@svgr/webpack'] } } } },
  redirects: async () => [{ destination: '/home', permanent: true, source: '/' }],
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });

    return config;
  }
};

export default nextConfig;
