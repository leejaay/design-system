import React from 'react';
import './Icon.scss';
import {iconList} from './data';
import cn from 'classnames';
import PropTypes from "prop-types";

export const Icon = props => {
    const classNames = cn('icon', {
        'icon-primary': props.color === 'primary',
        'icon-white': props.color === 'white',
    });
    return (
        <div className={classNames}>
            {iconList[props.name]}
        </div>
    );
};

Icon.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};

Icon.defaultProps = {
    color: 'primary',
    name: 'add'
};