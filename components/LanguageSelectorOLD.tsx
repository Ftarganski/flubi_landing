import { useRouter } from "next/router";
import styles from "../styles/Landpage.module.css";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";

const languageProps: any = {
  es: {
    name: "🇬🇧 ENG",
  },
  en: {
    name: "🇪🇸 ESP",
  },
};

interface LanguageSelectorProps {}

interface Language {
  slug: string;
  name: string;
}

const LanguageSelectorOLD = ({}: LanguageSelectorProps) => {
  const router = useRouter();
  const defaultLanguage = "en";
  const { locale = defaultLanguage, pathname, replace, asPath, query } = router;

  const { i18n } = useTranslation();

  const getLanguageProps = (slug: string): Language => {
    if (languageProps.hasOwnProperty(slug)) {
      let { name } = languageProps.hasOwnProperty(slug)
        ? languageProps[slug]
        : languageProps[defaultLanguage];
      return {
        name,
        slug,
      };
    }
    return {
      name: slug,
      slug,
    };
  };

  const currentLanguage = getLanguageProps(locale);
  const languages = (router.locales || []).map(getLanguageProps);

  const handleLanguageSelected = () => {
    var language;
    if (locale === "en") {
      language = { slug: "es", name: "ESP" };
      i18n.changeLanguage("es");
      replace({ pathname, query }, asPath, { locale: 'es' });
    } else if (locale === 'es'){
      language = { slug: "en", name: "ENG" };
      i18n.changeLanguage("en");
      replace({ pathname, query }, asPath, { locale: 'en' });
    }
  };

  return languages.length > 0 ? (
    <div>
      <button
        className={styles.nav_button_lang}
        onClick={() => handleLanguageSelected()}
      >
        {currentLanguage.name}
      </button>
    </div>
  ) : null;
};

export default LanguageSelectorOLD;
