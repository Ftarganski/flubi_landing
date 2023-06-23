import { useState } from "react";
import { useRouter } from "next/router";
import i18n from "./i18n/i18n";
import styles from "../styles/Landpage.module.css";

const languageProps: any = {
  es: {
    name: "ESP",
  },
  en: {
    name: "ENG",
  },
};

interface LanguageSelectorProps {}

interface Language {
  slug: string;
  name: string;
}

export const LanguageSelector = ({}: LanguageSelectorProps) => {
  const router = useRouter();
  const defaultLanguage = "en";
  const { locale = defaultLanguage, pathname, replace, asPath, query } = router;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

  const handleLanguageSelected = (language: Language) => {
    replace({ pathname, query }, asPath, { locale: language.slug });
    if (language.slug === "en") {
        i18n.changeLanguage("en");
      } else if (language.slug === 'es'){
        i18n.changeLanguage("es");
      }
  };

  const getLangIcon = ()=>{
    if (locale === "en") {
        return ("🇬🇧 EN")
      } else if (locale === 'es'){
        return ("🇪🇸 ES")
      }
  }

  //EVERYTHING IS IN TAILWIND... MAKE PURE CSSS CLASSES, YOU CAN CHECK THE PAGE https://nerdcave.com/tailwind-cheat-sheet and use to set same styles

  return languages.length > 0 ? (
    <div>
      <div className={styles.nav_button_lang} onClick={() => setMenuOpen(!menuOpen)} >
        <span>{(currentLanguage.slug ? getLangIcon() : "")}</span>
      </div>

      <div className={styles.nav_button_langSelected}
      style= {menuOpen? {display:"flex"} : {display:"none"}}
      onClick={() => setMenuOpen(false)}>
         {languages.map((lang) => (

            <button key={lang.slug} 
            className={styles.nav_button_text} 
              onClick={() => handleLanguageSelected(lang)}>

              {lang.slug.toUpperCase()}

            </button>
          ))}

      </div>
    </div>
  ) : null;
};
