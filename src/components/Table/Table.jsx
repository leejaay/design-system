import React from 'react';
import './Table.scss';
import PropTypes from "prop-types";

export const Table = props => {
    return (
        <div className="table-container">
            <table>
                <tr className="table-header">
                    {props.headers?.map(item => <th>{item}</th>)}
                </tr>
                {
                    props.data?.map(rows =>
                        <tr>
                            {rows.map(item => <td>{item}</td>)}
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

Table.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array
}

Table.defaultProps = {
    headers: [],
    data: []
}