import React from 'react';

import titleBrandStyles from './title-brand.module.scss';

export default ({intl}) => (
    <div className={titleBrandStyles.container}>
        <div className={titleBrandStyles.title + ' title title-empty grid-12'}>
            <p>BONJOUR ET BIENVENUE <span className="text-joined">CHEZ ALLEGRIA !</span></p>
        </div>
        <div className={titleBrandStyles.subtitle + ' text grid-12'}>
        <p>
        </p>
        </div>
    </div>
)