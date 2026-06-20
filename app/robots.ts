import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://mirantdesai01.github.io'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
