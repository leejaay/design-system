import React from 'react';
import './Sidebar.scss';
import SidebarItem from "./SidebarItem";
import PropTypes from "prop-types";

export const Sidebar = props => {
    return (
        <div className="sidebar">
            {
                props.logo &&
                <div className="sidebar-logo">
                    <img src={props.logo} alt="logo"/>
                </div>
            }
            {
                props.items?.map(item =>
                    <SidebarItem
                        key={item.key}
                        selected={props.selected === item.key}
                        icon={item.icon}
                        label={item.label}
                        onClick={item.onClick}/>
                )
            }
        </div>
    );
};

Sidebar.propTypes = {
    logo: PropTypes.any,
    selected: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.array
};

Sidebar.defaultProps = {
    logo: null,
    selected: 'home',
    icon: 'home',
    items: []
}