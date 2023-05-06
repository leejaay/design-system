import React from 'react';
import {Button} from 'fresh-design-system';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        primary: {
            control: 'boolean',
        },
        outline: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },

        loading: {
            control: 'boolean',
        },

        disabled: {
            control: 'boolean',
        },
        icon: {
            control: 'boolean',
        },
        text: {
            control: 'boolean',
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    primary: true,
    outline: true,
};

export const Outline = Template.bind({});
Outline.args = {
    outline: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    primary: true,
    icon: 'add'
};
export const JustIcon = Template.bind({});
JustIcon.args = {
    primary: true,
    icon: 'add',
    text: ''
};

export const Loading = Template.bind({});
Loading.args = {
    primary: true,
    loading: true,
    fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    primary: true,
    disabled: true,
};
