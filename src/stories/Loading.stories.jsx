import React from 'react';
import {Loading} from 'fresh-design-system';

export default {
    title: 'Loading',
    Component: Loading,
    argTypes: {
        primary: {
            control: 'boolean'
        }
    }
};

const Template = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true
};