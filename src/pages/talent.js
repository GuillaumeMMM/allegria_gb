import React from "react"
import Header from '../components/header';
import '../styles/talent.scss';
import TitleTalent from "../components/title-talent";
import SeparatorV from "../components/separator-v";
import TalentSection from "../components/talent-section";

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import Language from "../components/language";

const TalentPage = ({ intl }) => {
  return (
    <div className="talent-container">
      <div className="landing">
        <Header buttons={[
          { name: intl.formatMessage({ id: 'meta.buttons.contact' }), link: '/contact' }, 
          { name: intl.formatMessage({ id: 'meta.buttons.home' }), link: '/' }]}></Header>
        <TitleTalent intl={intl}></TitleTalent>
      </div>
      <div className="content">
        <SeparatorV></SeparatorV>
        <div className="margin-clear"></div>
        <TalentSection Parallax={Parallax} ParallaxProvider={ParallaxProvider} intl={intl}></TalentSection>
      </div>
      <div className="language">
            <Language></Language>
        </div>
    </div>
  )
}

export default injectIntl(TalentPage);