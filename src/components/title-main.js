import React from 'react';

import titleMainStyles from './title-main.module.scss';

export default ({intl}) => (
    <div className={titleMainStyles.container}>
        <div className={titleMainStyles.title + ' title title-empty grid-12'}>
            <p>DIGITAL & INFLUENCE
            CREATIVE STUDIO</p>
        </div>
        <div className={titleMainStyles.subtitle + ' text grid-12'}>
        <p>
            {intl.formatMessage({ id: 'main.title.subtitle' })}
            {/* ALLEGRIA est une agence digitale spécialisée en Influence. Nous offrons un service premium pour les marques et les influenceurs qui ont le désir de réaliser des collaborations remarquées, et du contenu de qualité. */}
        </p>
        </div>
    </div>
)