import React from 'react';
import {SummaryCard} from "fresh-design-system";

export default {
    title: 'SummaryCard',
    Component: SummaryCard,
    argTypes: {
        icon: {
            control: 'text'
        },
        title: {
            control: 'text'
        },
        value: {
            control: 'text'
        },
        percent: {
            control: 'text'
        }
    }
}

const Template = (args) => <SummaryCard {...args} />;

export const SimpleSummaryCard = Template.bind({});
SimpleSummaryCard.args = {
    icon: "home",
    title: "Total Revenue",
    value: "$10,243.00",
    percent: "",
};

export const UpSummaryCard = Template.bind({});
UpSummaryCard.args = {
    icon: "home",
    title: "Total Revenue",
    value: "$10,243.00",
    percent: "+14%",
};

export const DownSummaryCard = Template.bind({});
DownSummaryCard.args = {
    icon: "home",
    title: "Total Revenue",
    value: "$10,243.00",
    percent: "-14%",
};