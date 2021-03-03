import React from 'react';

import { Parallax } from 'react-scroll-parallax';


import wideImageStyles from './wide-image.module.scss';

export default (props) => (
    <div className={wideImageStyles.container}>
        <Parallax y={[-10, 10]} tagOuter="figure">
            <div className={wideImageStyles.wideImage}>
                <img src={props.image.src} alt={props.image.alt} style={{width: '100%'}}></img>
            </div>
        </Parallax>
    </div>
)