import React from 'react';
import {SelectButton} from "fresh-design-system";

export default {
    title: "SelectButton",
    Component: SelectButton
}


const Template = (args) => <SelectButton {...args} />;

export const SimpleSelectButton = Template.bind({});
SimpleSelectButton.args = {
    data: [
        {
            name: "Dine In",
            key: 1
        },
        {
            name: "To Go",
            key: 2
        },
        {
            name: "Delivery",
            key: 3
        }
    ],
    onSelect: () => {
    }
};