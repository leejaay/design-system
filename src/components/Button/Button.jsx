import React from 'react';
import './Button.scss';
import cn from 'classnames';
import {Icon, Loading} from "fresh-design-system";
import PropTypes from "prop-types";

export const Button = props => {
    const classNames = cn(
        'button', {
            'button-primary': props.primary && !props.outline,
            'button-primary-outline': props.primary && props.outline,
            'button-outline': props.outline && !props.primary,
            'button-loading': props.loading,
            'button-full-width': props.fullWidth,
        }
    );
    const icon = <Icon name={props.icon} color={props.primary && props.outline ? 'primary' : 'white'}/>;

    return (
        <button className={classNames} onClick={props.onClick} disabled={props.disabled || props.loading}>
            {!props.loading && props.icon && icon}
            {!props.loading && props.text}
            {props.loading && <Loading primary={props.primary && props.outline}/>}
        </button>
    );
};


Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string
};

Button.defaultProps = {
    primary: false,
    outline: false,
    fullWidth: false,
    loading: false,
    disabled: false,
    icon: null,
    text: 'Click Me!'
};
