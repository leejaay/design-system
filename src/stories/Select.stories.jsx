import React from 'react';
import {Select} from "fresh-design-system";

export default {
    title: "Select",
    Component: Select,
}


const Template = (args) => <Select {...args} />;

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
    data: [
        {
            name: "Credit Card",
            icon: "creditCard",
            key: 1
        },
        {
            name: "Paypal",
            icon: "paypal",
            key: 2
        },
        {
            name: "Cash",
            icon: "wallet",
            key: 3
        },
        {
            name: "BTC",
            icon: "add",
            key: 4
        }
    ],
    onSelect: () => {
    }
};