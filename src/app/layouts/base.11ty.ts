import navigation from '../components/navigation'

interface PageProps {
  title: string;
  content: string;
  lang: string;
  description: string;
}

const defaultDescription = 'TypeScript starter for Eleventy'

module.exports = ({
  title,
  content,
  lang = 'en',
  description = defaultDescription,
}: PageProps) => `
  <!doctype html>
  <html lang="${lang}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="${description}">
      <title>${title || 'Hello world'}</title>
    </head>
    <body>
      <header>
        ${navigation}
      </header>
      <main>
        ${content}
      </main>
    </body>
  </html>
`
