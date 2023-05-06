import React from 'react';
import './Badge.scss';
import cn from 'classnames';
import PropTypes from "prop-types";

export const Badge = props => {

    const classNames = cn(
        'badge', {
            'success-badge': props.type === 'success',
            'info-badge': props.type === 'info',
            'warning-badge': props.type === 'warning',
            'danger-badge': props.type === 'danger'
        }
    )

    return (
        <div className={classNames}>
            <div className='badge-text'>
                {props.text}
            </div>
        </div>
    );
};

Badge.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};

Badge.defaultProps = {
    text: 'Badge',
    type: 'success',
};
