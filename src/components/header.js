import React from 'react';
import headerStyles from './header.module.scss';
// import { Link } from "gatsby"

import Button from './button';
import SeparatorH from './separator-h';

import logo from "../assets/svg/logo.svg";
import logo_orange from "../assets/svg/logo_orange.svg";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

export default (props) => (
    <div className={headerStyles.container + ' header'}>
        <div className={headerStyles.buttons}>
            {props.buttons[0].link === '/contact' ? 
                <a href="mailto:delia@allegriaparis.com, mariebulle@allegriaparis.com" target="_blank" rel="noopener noreferrer">
                    <Button text={props.buttons[0].name}/>
                </a> : 
                <Link to={props.buttons[0].link}><Button text={props.buttons[0].name}/></Link>
            }
            <Link to={props.buttons[1].link}><Button text={props.buttons[1].name}/></Link>
        </div>
        <div className={headerStyles.logo}>
            <img src={logo_orange} alt="Allegria Logo" />
        </div>
        <div className={headerStyles.separator}>
            <SeparatorH></SeparatorH>
        </div>
    </div>
)