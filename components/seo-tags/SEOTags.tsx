import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Head from "next/head";

interface SEOTagsProps {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  image?: string | null;
  author?: string | null;
  twitterSite?: string | null;
  twitterCreator?: string | null;
}

export const SEOTags = (props: SEOTagsProps) => {
  const { t } = useTranslation("seo");
  const defaultProps = {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    image: t("image"),
    author: t("author"),
    twitterSite: t("twitterSite"),
    twitterCreator: t("twitterCreator"),
  };
  const specificProps = { ...props };
  const omitEmpty = (obj: any) => {
    Object.keys(obj)
      .filter((k) => !obj[k])
      .forEach((k) => delete obj[k]);
    return obj;
  };

  const mergeObj = { 
    ...omitEmpty(defaultProps), 
    ...omitEmpty(specificProps) };

  const {
    title,
    description,
    keywords,
    image,
    author,
    twitterSite,
    twitterCreator,
  } = mergeObj;

  const router = useRouter();
  const locales = router.locales;
  const defaultLocale = router.defaultLocale || "en";

  const baseUri = process.env.NEXT_PUBLIC_BASE_URI || "";
  const path = router.asPath;

  const uri = `${baseUri}${path}`;

  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={uri} />

      {Array.isArray(locales) &&
        locales.length > 1 &&
        locales.map((lang) => {
          let langUri = `${baseUri}/${lang}${path}`;
          if (lang === defaultLocale) {
            langUri = uri;
          }
          return (
            <link key={lang} rel="alternate" href={langUri} hrefLang={lang} />
          );
        })}

      <meta name="description" content={description ?? ""} />
      <meta name="keywords" content={keywords ?? ""} />
      <meta name="author" content={author ?? ""} />

      <meta name="google" content="notranslate" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={title ?? ""} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description ?? ""}
        key="twitter:description"
      />
      <meta name="twitter:image" content={image ?? ""} key="twitter:image" />
      <meta
        name="twitter:image:alt"
        content={title ?? ""}
        key="twitter:image:alt"
      />
      <meta
        name="twitter:site"
        content={twitterSite ?? ""}
        key="twitter:site"
      />
      <meta
        name="twitter:creator"
        content={twitterCreator ?? ""}
        key="twitter:creator"
      />

      <meta name="og:title" content={title ?? ""} key="og:title" />
      <meta
        name="og:description"
        content={description ?? ""}
        key="og:description"
      />
      <meta name="og:url" content={uri} key="og:url" />
      <meta name="og:image" property="og:image" content={image ?? ""} key="og:image" />
      <meta property="og:image:secure_url" content={image} />
      <meta name="og:type" content="website" key="og:type" />
    </Head>
  );
};
