import path from 'node:path';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const umami_url = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_URL ?? '';

const nextConfig: NextConfig = {
	output: 'export', // 🚨 必须：启用静态导出
	basePath: isProd ? '/memory-valley' : '',
	assetPrefix: isProd ? '/memory-valley/' : '',
	images: { unoptimized: true },
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	transpilePackages: ['next-mdx-remote'],
	reactCompiler: true,
	turbopack: {
		root: path.join(__dirname, '..'),
	},
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
	async rewrites() {
		return [
			{
				source: '/umami.js',
				destination: `${umami_url}/script.js`,
			},
			{
				source: '/api/send',
				destination: `${umami_url}/api/send`,
			},
		];
	},
};

export default nextConfig;
