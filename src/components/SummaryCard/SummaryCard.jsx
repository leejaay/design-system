import React from 'react';
import './SummaryCard.scss';
import {Icon} from 'fresh-design-system';
import cn from 'classnames';
import arrowUp from '../../styles/images/up-arrow.svg';
import arrowDown from '../../styles/images/down-arrow.svg';
import PropTypes from "prop-types";

export const SummaryCard = props => {
    const up = props.percent && props.percent.substring(0, 1) === '+';
    const down = props.percent && props.percent.substring(0, 1) === '-';
    const percentValueClassNames = cn('summary-card-percent-value', {
        'up': up,
        'down': down,
    });

    return (
        <div className="summary-card-container">
            <div className="summary-card-top">
                <div className="summary-card-icon">
                    <Icon name={props.icon}/>
                </div>
                {
                    props.percent &&
                    <div className="summary-card-percent-container">
                        <div className={percentValueClassNames}>{props.percent}</div>
                        <div className="summary-card-percent-icon">
                            {up && <img src={arrowUp} alt="arrow-up"/>}
                            {down && <img src={arrowDown} alt="arrow-down"/>}
                        </div>
                    </div>
                }

            </div>
            <div className="summary-card-bottom">
                <div className="summary-card-value">{props.value}</div>
                <div className="summary-card-title">{props.title}</div>
            </div>
        </div>
    );
};

SummaryCard.propTypes = {
    percent: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string
}

SummaryCard.defaultProps = {
    percent: "+14",
    icon: "Home",
    title: "Total Revenue",
    value: "$10,243.00"
}