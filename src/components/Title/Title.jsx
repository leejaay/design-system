import React from 'react';
import './Title.scss';
import PropTypes from "prop-types";

export const Title = props => {
    return (
        <div className="title-container">
            <div className="title">{props.title}</div>
            {
                props.subtitle &&
                <div className="subtitle">{props.subtitle}</div>
            }
        </div>
    );
};

Title.propsTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

Title.defaultProps = {
    title: 'Title example',
    subtitle: ''
}