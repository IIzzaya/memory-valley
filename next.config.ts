import path from 'node:path';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
	output: 'export',
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
};

export default nextConfig;
