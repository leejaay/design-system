import React from 'react';
import {Dropdown} from "fresh-design-system";

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        fullWidth: {
            control: 'boolean'
        }
    }
};

const Template = (args) => <Dropdown {...args} />;

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
    list: [
        {
            key: 1,
            title: 'Dine In'
        },
        {
            key: 2,
            title: 'Dine In 2'
        },
        {
            key: 3,
            title: 'Dine In 3'
        },
        {
            key: 4,
            title: 'Dine In 4'
        },
        {
            key: 5,
            title: 'Dine In 5'
        },
        {
            key: 6,
            title: 'Dine In 6'
        },
        {
            key: 7,
            title: 'Dine In 7'
        },
    ]
};