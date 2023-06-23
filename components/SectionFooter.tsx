import React from "react";
import styles from "../styles/Landpage.module.css";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import Form from "../components/section_footer/form";
import Image from "next/image";
import flubiImageText from "../public/assets/images/flubi_text.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.footer} id="contactForm">
      <div>
        <div className={styles.footer_top}>
          <div className={styles.footer_flubi}>
            <Image
              src={flubiImageText}
              alt="Flubi Text Footer"
              className={styles.image_text_flubi_footer}
            />
            <div>
              <div className={styles.footer_flubi_line}></div>
              <div>
                <p className={styles.footer_flubi_text}>{t("footer_title")}</p>
                {/* <p className={styles.footer_flubi_quote}>{t("footer-quote")}</p> */}
              </div>
            </div>
            <div>
              <p className={styles.footer_flubi_quote}>{t("footer-quote")}</p>
            </div>
            <div className={styles.footer_flubi_social}>
              <a
                href="https://www.instagram.com/flubi_co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className={styles.footer_flubi_social_icon} />
              </a>
              <a
                href="https://twitter.com/flubi_co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className={styles.footer_flubi_social_icon} />
              </a>
              <a
                href="https://www.linkedin.com/company/flubi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={styles.footer_flubi_social_icon} />
              </a>
              <a
                href="https://www.facebook.com/flubi.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className={styles.footer_flubi_social_icon} />
              </a>
            </div>
          </div>

          <div className={styles.footer_form}>
            <h3>{t("form_title")}</h3>
            <p>{t("form_subtitle")}</p>
            <Form />
          </div>
        </div>

        <div className={styles.footer_mail}>
          <span></span>
          <span>
            <a href="mailto:hello@flubi.co" target="_blank" rel="noreferrer">
              <EmailIcon className={styles.footer_icon_mail} />
              <p>hello@flubi.co</p>
            </a>
          </span>
          <span>
            <a
              href="#top">
              <ExpandCircleDownIcon className={styles.footer_icon_top} />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
