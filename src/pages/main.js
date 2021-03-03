import React from "react"
import Header from '../components/header';
import '../styles/main.scss';
import TitleMain from "../components/title-main";
import SeparatorV from "../components/separator-v";
import MainSection1 from "../components/main-section-1";

import { ParallaxProvider } from 'react-scroll-parallax';

import { Parallax } from 'react-scroll-parallax';

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Language from "../components/language";

const MainPage = ({intl}) => {
    return (
      <div className="main-container">
        <div className="landing">
          <Header buttons={[
            {name: intl.formatMessage({ id: 'meta.buttons.talent' }), link: '/talent'}, 
            {name: intl.formatMessage({ id: 'meta.buttons.brand' }), link: '/brand'}]}></Header>
          <TitleMain intl={intl}></TitleMain>
        </div>
        <div className="content">
          <SeparatorV></SeparatorV>
          <div className="margin-clear"></div>
          <MainSection1 Parallax={Parallax} ParallaxProvider={ParallaxProvider} intl={intl}></MainSection1>
        </div>
        <div className="language">
            <Language></Language>
        </div>
      </div>
    )
}

export default injectIntl(MainPage);