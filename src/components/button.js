import React from 'react';
import buttonStyles from './button.module.scss';

export default (props) => (
    <div className={buttonStyles.container + ' button'}>
        {props.text}
    </div>
)