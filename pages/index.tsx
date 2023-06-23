import React from "react";
import styles from "../styles/Landpage.module.css";
import HeadFlubi from "../components/head";
import Body from "../components/SectionBody";
import Footer from "../components/SectionFooter";
import Main from "../components/SectionMain";
import { useTranslation } from "react-i18next";
import { SEOTags } from "../components/seo-tags";

export default function Home() {
  const { t } = useTranslation("seo");

  const seo = {
    title: t<string>("title"),
    description: t<string>("description"),
    keywords: t<string>("keywords"),
    image: t<string>("image"),
    author: t<string>("author"),
    twitterSite: t<string>("twitterSite"),
    twitterCreator: t<string>("twitterCreator"),
  };

  //console.log(seo, 'SEOOOOO')
  return (
    <>
    <SEOTags {...seo} />
      <HeadFlubi />
      <div className={styles.main}>
        <Main />
        <Body />
        <Footer />
      </div>
    </>
  );
}
