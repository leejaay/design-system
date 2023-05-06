import React from 'react';
import cn from 'classnames';
import {Icon} from "fresh-design-system";

const SidebarItem = props => {
    const classNames = cn('sidebar-item', {
        'sidebar-item-selected': props.selected
    });

    return (
        <div className="sidebar-item-container" onClick={props.onClick}>
            <div className={classNames}>
                {
                    props.icon &&
                    <div className="sidebar-item-icon">
                        <Icon name={props.icon}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default SidebarItem;