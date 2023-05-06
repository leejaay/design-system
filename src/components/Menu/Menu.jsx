import React from 'react';
import './Menu.scss';
import cn from 'classnames';
import {Icon} from "fresh-design-system";
import PropTypes from "prop-types";

export const Menu = props => {

    const menuItemClassNames = key => cn('menu-item', {
        'menu-item-selected': key === props.selected
    });

    return (
        <div className="menu-container">
            {
                props.items?.map(item =>
                    <div className={menuItemClassNames(item.key)} onClick={item.onClick}>
                        <div className="menu-item-icon">
                            <Icon name={item.icon}/>
                        </div>
                        <div className="menu-item-texts">
                            <div className="menu-item-label">{item.label}</div>
                            <div className="menu-item-description">{item.description}</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Menu.propTypes = {
    selected: PropTypes.string,
    items: PropTypes.array
};

Menu.defaultProps = {
    selected: 'menu1',
    items: []
}