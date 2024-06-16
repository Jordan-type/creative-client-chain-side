/** @type {import('next').NextConfig} */
import withTM from 'next-transpile-modules';

const transpileModules = ['rc-util', 'antd', '@ant-design/icons', 'rc-pagination', 'rc-picker'];

const nextConfig = withTM(transpileModules)({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});

export default nextConfig;

