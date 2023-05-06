import React from 'react';
import {Title} from 'fresh-design-system';

export default {
    title: 'Title',
    Component: Title,
    argTypes: {
        title: {
            control: 'text'
        },
        subtitle: {
            control: 'text'
        }
    }
};

const Template = (args) => <Title {...args} />;

export const JustTitle = Template.bind({});
JustTitle.args = {
    title: 'This is a title',
    subtitle: ''
};

export const TitleWithSubtitle = Template.bind({});
TitleWithSubtitle.args = {
    title: 'This is a title',
    subtitle: 'This is a subtitle'
};