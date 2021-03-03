import React from "react";

// import { Link } from "gatsby"

import Button from '../components/button';
import logo_orange from "../assets/svg/logo_orange.svg";
import '../styles/404.scss';

import SEO from "../components/seo";
import { injectIntl, Link } from "gatsby-plugin-intl";

const NotFoundPage = ({ intl }) => (
  <div className="notfound-container">
    <SEO title="404: Not found" />
    <div className="notfound-buttons">
      <a href="mailto:delia@allegriaparis.com, mariebulle@allegriaparis.com" target="_blank" rel="noopener noreferrer">
        <Button text={intl.formatMessage({ id: 'meta.buttons.contact' })} />
      </a>
      <Link to={'/'}><Button text={intl.formatMessage({ id: 'meta.buttons.home' })}/></Link>
    </div>
    <div className="notfound-logo">
      <img src={logo_orange} alt="Allegria Logo" />
    </div>
    <p>{intl.formatMessage({ id: 'meta.notfound' })}</p>
  </div>
)

export default injectIntl(NotFoundPage)
