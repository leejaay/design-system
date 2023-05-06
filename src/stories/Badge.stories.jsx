import React from 'react';
import {Badge} from 'fresh-design-system';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        type: {
            control: 'select',
            options: ['success', 'info', 'danger', 'warning']
        },
        text: {
            control: 'text'
        }
    },
};

const Template = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    text: 'Badge',
};

export const Info = Template.bind({});
Info.args = {
    type: 'info',
    text: 'Badge',
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    text: 'Badge',
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    text: 'Badge',
};
