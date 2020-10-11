import React from 'react';
import list from '../constant/list.json'

export default class SelectedItems extends React.Component {
    render() {
        return (
            <div className="right-container">
                {Object.keys(list).map((_, key) => (
                    <React.Fragment key={key}>
                        { list[_].some(r => this.props.checkedItems.indexOf(r.id) >= 0) && <h4>{_}</h4>}
                        {list[_].map((__) => (
                            this.props.checkedItems.includes(__.id) ? <div className="list-container" key={__.id}> <li className="list-item">{__.name} <label onClick={(e) => this.props.handleChecked(__.id)}>&#x2715;</label></li></div> : ""
                        ))}
                    </React.Fragment>
                ))}
            </div>
        )
    }
}