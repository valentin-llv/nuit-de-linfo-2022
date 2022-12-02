module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,css,js,woff2,ico,svg,html}'
	],
	swDest: 'dist/sw.js',
	swSrc: "src/serviceWorker.js",
	injectionPoint: "injectionPoint",
};