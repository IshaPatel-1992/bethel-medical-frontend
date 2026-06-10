import { Helmet } from "react-helmet-async";

const siteUrl = "https://bethelmedicalcentres.ca";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  schema,
}) {
  const canonical = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bethel Medical Centres" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}