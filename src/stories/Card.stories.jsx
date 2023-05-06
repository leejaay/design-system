import React from 'react';
import {Card, Button} from "fresh-design-system";

export default {
    title: "Card",
    component: Card,
    argTypes: {
        withoutHeader: {
            control: 'boolean'
        },
        headerSeparator: {
            control: 'boolean'
        },
        withoutPadding: {
            control: 'boolean'
        },
        title: {
            control: 'text'
        },
    }
}

const Template = (args) => <Card {...args} />;

export const WithHeader = Template.bind({});
WithHeader.args = {
    withoutHeader: false,
    title: 'Card Title',
};

export const WithButton = Template.bind({});
WithButton.args = {
    withoutHeader: false,
    headerButtons: <Button text="Card Button" primary/>,
    title: 'Card with buttons',
    headerSeparator: false
};

export const WithHeaderSeparator = Template.bind({});
WithHeaderSeparator.args = {
    withoutHeader: false,
    headerSeparator: true,
    title: 'Card with separator',
};

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
    title: 'Card without padding',
    withoutPadding: true,
    withoutHeader: false,
    headerSeparator: true
};
