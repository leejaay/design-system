import React from 'react';
import './Loading.scss';
import cn from 'classnames';
import PropTypes from "prop-types";

export const Loading = props => {
    return (
        <div className={cn('dot-collision', {'dot-primary': props.primary})}/>
    );
};

Loading.propTypes = {
    primary: PropTypes.bool
};

Loading.defaultProps = {
    primary: true
};