import React from 'react';
import {Tab} from "fresh-design-system";

export default {
    title: "Tab",
    Component: Tab,
}


const Template = (args) => <Tab {...args} />;

export const SimpleTab = Template.bind({});
SimpleTab.args = {
    items: [
        {
            label: 'Hot dishes',
            content: <div>Tab 1 - content</div>
        },
        {
            label: 'Cold dishes',
            content: <div>Tab 2 - content</div>
        },
        {
            label: 'Soup',
            content: <div>Tab 3 - content</div>
        },
        {
            label: 'Grill',
            content: <div>Tab 4 - content</div>
        },
    ]
};