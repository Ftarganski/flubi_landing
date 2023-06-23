import React from "react";
import styles from "../styles/Landpage.module.css";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import flubiImage from "../public/assets/images/flubi.svg";
import flubiImageText from "../public/assets/images/flubi_text.svg";
import Image from "next/image";
import Navbar from "./section_main/navbar";

const Main = () => {
  const { t } = useTranslation("common");
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>

      <div className={styles.hero_nav}>
        <div className={styles.hero_nav_logo}></div>

        <div className={styles.hero_nav_menu}>
          <Navbar />
        </div>
      </div>

      <div className={styles.hero_main}>
        <div>
          <Image
            src={flubiImage}
            alt="Flubi Logo"
            className={styles.image_logo_flubi}
          />
          <Image
            src={flubiImageText}
            alt="Flubi Text"
            className={styles.image_text_flubi}
          />
        </div>
        <div className={styles.hero_main_title}>
          <h2>{t("hero_title")}</h2>
        </div>
        <div className={styles.hero_main_subtitle}>
          <h3>{t("hero_subtitle")}</h3>
        </div>
      </div>

      <div className={styles.hero_image_earth}></div>
    </section>
  );
};

export default Main;
