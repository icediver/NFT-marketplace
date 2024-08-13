/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['localhost', 'vercel.com', 'images.unsplash.com', 'github.io'],
	},
	webpack(config) {
		//config.resolve.alias['@'] = path.resolve(__dirname, '../src');
		config.module.rules.push({
			test: /\.svg$/i,
			// issuer: /\.[jt]sx?$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }],
		});

		return config;
	},
};

export default nextConfig;
