import React from 'react';
import {Icon} from 'fresh-design-system'
import './TextInput.scss';
import cn from 'classnames';
import PropTypes from "prop-types";

export const TextInput = props => {

    const labelClassNames = cn(
        'text-input-label', {
            'text-input-with-icon': props.icon,
        }
    );
    const inputClassNames = cn(
        'text-input', {
            'text-input-full-width': props.fullWidth,
        }
    );


    return (
        <label className={labelClassNames}>
            <input value={props.value} readOnly={props.readOnly} type={props.type} onChange={props.onChange}
                   placeholder={props.placeholder} className={inputClassNames}/>
            {
                props.icon &&
                <div className="text-input-icon">
                    <Icon name={props.icon} color={props.iconColor}/>
                </div>
            }
        </label>
    );
};

TextInput.propTypes = {
    fullWidth: PropTypes.bool,
    readOnly: PropTypes.bool,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

TextInput.defaultProps = {
    fullWidth: false,
    readOnly: false,
    icon: null,
    iconColor: null,
    type: "text",
    placeholder: "Type Your Text",
    onChange: () => {
    }
};