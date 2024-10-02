/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sgmscapes.com',
	exclude: ['/admin/*', '/admin', '/api/*'],
  generateRobotsTxt: true,
	generateIndexSitemap: false,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			}
		]
	}
}