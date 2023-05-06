import React, {useState} from 'react';
import './Tab.scss';
import cn from 'classnames';
import PropTypes from "prop-types";

export const Tab = props => {
    const [selected, setSelected] = useState(0);
    const tabContentClassNames = key => cn('tab-content', {
        'teb-content-show': key === selected
    });
    const tabListItemClassNames = key => cn('tab-list-item', {
        'tab-list-item-selected': key === selected
    })
    return (
        <div className="tab-container">
            <div className="tab-list">
                {
                    props.items?.map((item, index) => <div key={index}
                                                           onClick={() => setSelected(index)}
                                                           className={tabListItemClassNames(index)}>{item.label}</div>)
                }
            </div>
            <div className="tab-contents">
                {
                    props.items?.map((item, index) => <div key={index}
                                                           className={tabContentClassNames(index)}>{item.content}</div>)
                }
            </div>
        </div>
    );
};

Tab.propTypes = {
    items: PropTypes.array
};

Tab.defaultProps = {
    items: []
}