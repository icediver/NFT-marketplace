/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['localhost'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			// issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	output: 'export',
	basePath: '/NFT-marketplace-frontend',
};

export default nextConfig;
