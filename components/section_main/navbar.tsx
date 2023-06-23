import React from "react";
import Link from "next/link";
import styles from "../../styles/Landpage.module.css";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../LanguageSelector";


const Navbar = () => {
  const { t } = useTranslation("common");

  //ABOUT will have to link to a gitbook like => https://nash21.gitbook.io/
  return (
    <div className={styles.menu_list}>
      <Link className={styles.nav_button} href="./">
        {t("about")}
      </Link>
      {/* <Link className={styles.nav_button} href="/news">
        {t("news")}
      </Link> */}
      <Link className={styles.nav_button} href="#contactForm">
        {t("get-in-touch")}
      </Link>
            <LanguageSelector />

    </div>
  );
};

export default Navbar;
