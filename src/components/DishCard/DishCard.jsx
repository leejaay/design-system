import React from 'react';
import './DishCard.scss';
import {Icon} from "fresh-design-system";
import cn from "classnames";
import PropTypes from "prop-types";

export const DishCard = props => {

    const classNames = cn(
        'dish-card',
        {
            'editable-dish-card': props.editable
        }
    );

    return (
        <div className="dish-card-container" onClick={props.onClick}>
            <div className={classNames}>
                <div className="dish-card-image">
                    <img src={props.image}/>
                </div>
                <div className="dish-card-title">
                            <span>
                                {props.title}
                            </span>
                </div>
                <div className="dish-card-price">
                            <span>
                                {props.price}
                            </span>
                </div>
                <div className="dish-card-inventory">
                            <span>
                                {props.inventory}
                            </span>
                </div>
                {
                    props.editable &&
                    <button className="dish-card-edit-button">
                        <Icon name="edit" color="primary"/>
                        <span>Edit Dish</span>
                    </button>
                }
            </div>
        </div>
    );
};

DishCard.propTypes = {
    editable: PropTypes.bool,
    onClick: PropTypes.func,
    image: PropTypes.element,
    title: PropTypes.string,
    price: PropTypes.string,
    inventory: PropTypes.string
};

DishCard.defaultProps = {
    editable: false,
    onClick: null,
    image: null,
    title: 'Dish Card Title',
    price: '$700',
    inventory: '90 Bowls'
};