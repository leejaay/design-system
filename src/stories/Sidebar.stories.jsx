import React from "react";
import {Sidebar} from "fresh-design-system";
import useState from "storybook-addon-state";
import logo from "../styles/images/logo.svg";


export default {
    title: "Sidebar",
    Component: Sidebar,
}

export const SimpleSidebar= () => {
    const [selected, setSelectedSidebarItem] = useState('selected', 'home');
    return (
        <Sidebar logo={logo} selected={selected} items={[
            {
                key: 'home',
                icon: 'home',
                onClick: () => setSelectedSidebarItem('home')
            },
            {
                key: 'home2',
                icon: 'wallet',
                onClick: () => setSelectedSidebarItem('home2')
            },
            {
                key: 'home3',
                icon: 'creditCard',
                onClick: () => setSelectedSidebarItem('home3')
            },
            {
                key: 'home4',
                icon: 'logout',
                onClick: () => setSelectedSidebarItem('home4')
            },

        ]}/>
    );
};