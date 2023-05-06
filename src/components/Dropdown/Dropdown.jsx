import React, {useRef, useState} from 'react';
import './Dropdown.scss';
import {Icon} from "fresh-design-system";
import cn from "classnames";
import PropTypes from "prop-types";

export const Dropdown = props => {

    const list = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(1)
    const handleSelect = (key) => {
        setSelected(key)
        props.onSelect(key)
        setIsOpen(false)
    }
    const title = props.list.find(t => t.key === selected)
    const wrapperClassNames = cn(
        "drop-down-wrapper",
        {
            "drop-down-wrapper-full-width": props.fullWidth
        }
    );
    const listClassNames = cn(
        'drop-down-list-container',
        {
            'drop-down-open-list': isOpen,
            'drop-down-list-full-width': props.fullWidth
        }
    );
    const iconClassNames = cn(
        "drop-down-icon",
        {
            "drop-down-open-icon": isOpen
        }
    );
    const closeOpenMenus = (e) => {
        if (list.current && isOpen && !list.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)


    return (
        <div className={wrapperClassNames} ref={list}>
            <div className="drop-down-header" onClick={() => setIsOpen(!isOpen)}>
                <div className={iconClassNames}>
                    <Icon name="arrowDown" color="white"/>
                </div>
                <div className="drop-down-title">
                    {title.title}
                </div>
            </div>
            <div className={listClassNames}>
                {
                    props.list.map((item) => (
                        <div className="drop-down-list-item" key={item.key} onClick={() => handleSelect(item.key)}>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
Dropdown.propTypes = {
    fullWidth: PropTypes.bool,
    onSelect: PropTypes.func,
    list: PropTypes.array
};

Dropdown.defaultProps = {
    fullWidth: false,
    onSelect: null,
    list: []
};