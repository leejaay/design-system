import React from 'react';
import {Icon} from "fresh-design-system";

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        color: {
            control: 'text'
        },
        name: {
            control: 'text'
        }
    }
};

const Template = (args) => <Icon {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
    name: 'add',
    color: 'primary'
};