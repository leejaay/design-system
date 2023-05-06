import React from "react";
import {Menu} from "fresh-design-system";
import useState from "storybook-addon-state";

export default {
    title: "Menu",
    Component: Menu,
}

export const SimpleMenu = () => {
    const [selected, setSelected] = useState('selected', 'menu1');
    return (
        <Menu selected={selected} items={[
            {
                key: 'menu1',
                icon: 'home',
                label: 'Finance',
                description: 'Deposit, Withdraw, Reports, etc',
                onClick: () => setSelected('menu1')
            },
            {
                key: 'menu2',
                icon: 'wallet',
                label: 'Product Management',
                description: 'Deposit, Withdraw, Reports, etc',
                onClick: () => setSelected('menu2')
            },
            {
                key: 'menu3',
                icon: 'creditCard',
                label: 'Wallet Management',
                description: 'Deposit, Withdraw, Reports, etc',
                onClick: () => setSelected('menu3')
            },
        ]}/>
    );
};