import React from "react";
import {TextInput} from "fresh-design-system";

export default {
    title: "TextInput",
    Component: TextInput,
    argTypes: {
        fullWidth: {
            control: 'boolean',
        },
        readOnly: {
            control: 'boolean',
        },
    }
}


const Template = (args) => <TextInput {...args} />;

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
};
export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: "home",
    iconColor: "white"
};