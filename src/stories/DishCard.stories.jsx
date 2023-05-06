import React from 'react';
import {DishCard} from 'fresh-design-system';

export default {
    title: 'DishCard',
    component: DishCard,
    argTypes: {
        editable: {
            control: 'boolean',
        },
        title: {
            control: 'text',
        },
        price: {
            control: 'text',
        },

        inventory: {
            control: 'text',
        },
    },
};

const Template = (args) => <DishCard {...args} />;

export const Editable = Template.bind({});
Editable.args = {
    editable: true,
};
export const NonEditable = Template.bind({});
NonEditable.args = {
    editable: false,
};