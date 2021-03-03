import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import languageStyles from './language.module.scss';

const languageName = {
    en: "En",
    fr: 'Fr'
}

const Language = () => {
  return (
    <div className={languageStyles.container}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className={languageStyles.link + (language === currentLocale ? ' ' + languageStyles.active : '')}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language