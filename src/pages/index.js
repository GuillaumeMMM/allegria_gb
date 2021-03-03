import React from "react";
import Main from './main';
import { Helmet } from "react-helmet";

import DoyleBlack from "../assets/fonts/Doyle-Black.otf";
import NewParisSkyline from "../assets/fonts/NewParis-Skyline.otf";

export default () => (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Allegria</title>
            <meta name="description" content="ALLEGRIA est une agence digitale spécialisée en Influence. Nous offrons un service premium pour les marques et les influenceurs qui ont le désir de réaliser des collaborations remarquées, et du contenu de qualité."></meta>

            <link rel="preload"
                as="font"
                href={DoyleBlack}
                type="font/opentype"
                crossOrigin="anonymous" />
            <link rel="preload"
                as="font"
                href={NewParisSkyline}
                type="font/opentype"
                crossOrigin="anonymous" />
        </Helmet>
        <Main />
    </div>
);
