import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description: string
  image?: string
  url?: string
}

export function SEO({ title, description, image, url }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  )
}
