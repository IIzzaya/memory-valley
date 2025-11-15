export const getAssetPath = (path: string): string => {
	const isProd = process.env.NODE_ENV === 'production';
	const basePath = isProd ? '/memory-valley' : '';
	// 确保路径以斜杠开头，且避免双斜杠
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${basePath}${normalizedPath}`;
};
