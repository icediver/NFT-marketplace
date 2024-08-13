/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['localhost', 'vercel.com', 'images.unsplash.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			// issuer: /\.[jt]sx?$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }],
		});

		return config;
	},
	output: 'export',
	basePath: '/NFT-marketplace-frontend',
};

export default nextConfig;
