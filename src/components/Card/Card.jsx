import React from 'react';
import './Card.scss';
import cn from 'classnames';
import PropTypes from "prop-types";

export const Card = props => {
    const classNames = cn('card-container', {
        'card-padding': !props.withoutPadding
    });
    const headerClassNames = cn('card-header', {
        'card-header-padding': !props.withoutHeader && props.withoutPadding
    });

    return (
        <div className={classNames}>
            {
                !props.withoutHeader &&
                <div className={headerClassNames}>
                    <div className="card-title">{props.title}</div>
                    <div className="card-buttons">{props.headerButtons}</div>
                </div>
            }
            {
                !props.withoutHeader && props.headerSeparator && <div className="card-header-separator"/>
            }
            <div className="card-body">{props.children}</div>
        </div>
    );
};

Card.propTypes = {
    withoutHeader: PropTypes.bool,
    headerSeparator: PropTypes.bool,
    withoutPadding: PropTypes.bool,
    title: PropTypes.string,
    headerButtons: PropTypes.element,
    children: PropTypes.any,
};

Card.defaultProps = {
    withoutHeader: false,
    headerSeparator: false,
    withoutPadding: false,
    title: "Card Title",
    headerButtons: null,
    children: "Lorem Ipsum"
};