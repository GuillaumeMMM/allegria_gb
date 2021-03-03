import React from 'react';

import titleTalentStyles from './title-talent.module.scss';

export default ({intl}) => (
    <div className={titleTalentStyles.container}>
        <div className={titleTalentStyles.title + ' title title-empty grid-12'}>
            <p>
                {/* WELCOME  */}
                {intl.formatMessage({ id: 'talent.title.title.1' })}
                <span className="text-joined">
                    {/* CHEZ ALLEGRIA ! */}
                    {intl.formatMessage({ id: 'talent.title.title.2' })}
                </span>
            </p>
        </div>
        <div className={titleTalentStyles.subtitle + ' text grid-12'}>
        <p>
        {intl.formatMessage({ id: 'talent.title.subtitle' })}
            {/* ALLEGRIA est une agence digitale spécialisée en Influence.
            Nous offrons un service premium pour les marques et les influenceurs qui ont le désir 
            de réaliser des collaborations remarquées, et du contenu de qualité. */}
        </p>
        </div>
    </div>
)