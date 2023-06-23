import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/Landpage.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Item_01 = () => {
  const { t } = useTranslation("common");
  const body_item_01_ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const trigger = window.innerHeight;
    if (body_item_01_ref.current) {
      const position = body_item_01_ref.current.getBoundingClientRect().top;
      if (position < trigger) {
        body_item_01_ref.current.classList.add(
          styles["body_item_odd_animated"]
        );
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={body_item_01_ref} className={styles.body_item_odd}>
      <div className={styles.body_item}>
        <div className={styles.body_item_number}>
          <p>01</p>
        </div>
        <div className={styles.body_item_text}>
          <h3>{t("item_01_title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("item_01_text") }} />
        </div>
        <div className={styles.body_item_icon}>
          <Icon icon="carbon:network-enterprise" className={styles.body_icon} />
        </div>
      </div>
    </div>
  );
};

export default Item_01;
