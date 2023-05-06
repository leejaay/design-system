import React, {useState} from 'react';
import "./SelectButton.scss";
import cn from 'classnames';
import PropTypes from "prop-types";

export const SelectButton = props => {

    const [selected, setSelected] = useState(1);
    const handleSelect = (key) => {
        setSelected(key)
        props.onSelect(key)
    }
    const selectButtonItemClassNames = key => cn('select-button', {
        'select-button-selected': key === selected
    });

    return (
        <div className="select-button-container">
            {
                props.data.map((s) => (
                    <div className={selectButtonItemClassNames(s.key)} onClick={() => handleSelect(s.key)}>
                        {s.name}
                    </div>
                ))
            }
        </div>
    );
};

SelectButton.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func
}

SelectButton.defaultProps = {
    data: [],
    onSelect: () => {
    }
}