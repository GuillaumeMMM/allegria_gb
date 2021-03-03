import React from "react"
import Header from '../components/header';
import '../styles/brand.scss';
import TitleBrand from "../components/title-brand";
import SeparatorV from "../components/separator-v";
import BrandSection from "../components/brand-section";

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import Language from "../components/language";

const BrandPage = ({intl}) => {
  return (
    <div className="brand-container">
        <div className="landing">
          <Header buttons={[
            {name: intl.formatMessage({ id: 'meta.buttons.contact' }), link: '/contact'}, 
            {name: intl.formatMessage({ id: 'meta.buttons.home' }), link: '/'}]}></Header>
          <TitleBrand intl={intl}></TitleBrand>
        </div>
        <div className="content">
          <SeparatorV></SeparatorV>
          <div className="margin-clear"></div>
          <BrandSection Parallax={Parallax} ParallaxProvider={ParallaxProvider} intl={intl}></BrandSection>
        </div>
        <div className="language">
            <Language></Language>
        </div>
      </div>
  )
}

export default injectIntl(BrandPage)