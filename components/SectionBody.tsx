import React from "react";
import styles from "../styles/Landpage.module.css";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import Item_01 from "../components/section_body/item_01";
import Item_02 from "../components/section_body/item_02";
import Item_03 from "../components/section_body/item_03";
import Item_04 from "../components/section_body/item_04";
import Item_05 from "../components/section_body/item_05";
import Item_06 from "../components/section_body/item_06";

const Body = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.body}>
      <div className={styles.body_title}>
        <h2 dangerouslySetInnerHTML={{ __html: t("body_title") }} />
      </div>

      <div className={styles.body_items}>
        <Item_01 />
        <Item_02 />
        <Item_03 />
        <Item_04 />
        <Item_05 />
        <Item_06 />
      </div>
    </section>
  );
};

export default Body;
