import React from "react";
import {Table} from "fresh-design-system";

export default {
    title: "Table",
    Component: Table,
}

const Template = (args) => <Table {...args} />;

export const SimpleTable = Template.bind({});
SimpleTable.args = {
    headers: [
        'Customer',
        'Menu',
        'Total Payment',
        'Status'
    ],
    data: [
        [
            'Eren Jaeger',
            'Spicy seasoned seafood noodles',
            '$125',
            'Completed'
        ],
        [
            'Eren Jaeger',
            'Spicy seasoned seafood noodles',
            '$125',
            'Completed'
        ],
        [
            'Eren Jaeger',
            'Spicy seasoned seafood noodles',
            '$125',
            'Completed'
        ],
        [
            'Eren Jaeger',
            'Spicy seasoned seafood noodles',
            '$125',
            'Completed'
        ],
    ]
};