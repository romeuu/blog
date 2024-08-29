interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Sromeua', // Site author
	title: 'matt3osec', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
