import React, {useState} from 'react';
import './Select.scss';
import {Icon} from "fresh-design-system";
import cn from "classnames";
import PropTypes from "prop-types";

export const Select = props => {

    const [selected, setSelected] = useState();
    const handleSelect = (key) => {
        setSelected(key)
        props.onSelect(key)
    }
    const selectClassNames = key => cn('select', {
        'select-active': key === selected
    });

    return (
        <div className="select-container">
            {props.data.map((s) => (
                <div className={selectClassNames(s.key)}
                     onClick={() => handleSelect(s.key)}>
                    {s.key === selected &&
                    <div className="check-circle-container"><Icon name="checkCircle" color="primary"/></div>
                    }
                    <div className="select-icon">
                        <Icon name={s.icon} color="white"/>
                    </div>
                    <div className="select-name">{s.name}</div>
                </div>
            ))}
        </div>
    );
}

Icon.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func
};

Icon.defaultProps = {
    data: [],
    onSelect: () => {
    }
}