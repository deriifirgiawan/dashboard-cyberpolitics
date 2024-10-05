/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		cache: {
			maxAge: 20,
			immutable: true,
		},
	},
};

export default nextConfig;
