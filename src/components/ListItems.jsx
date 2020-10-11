import React from 'react';
import list from '../constant/list.json'

export default class ListItems extends React.Component {
    render() {
        console.log(list, this.props.checkedItems)
        return (
            <div className="left-container">
                {Object.keys(list).map((_, key) => (
                    <React.Fragment key={key}>
                        <h5>{_}</h5>
                        {list[_].map(__ => (
                            <div className="list-container d-block" key={__.id}>
                                <input type="checkbox" id={__.id} checked={this.props.checkedItems.some(item => item === __.id)} onChange={(e) => this.props.handleChecked(__.id)} />
                                <label for={__.id} className="list-item m0">{__.name}</label>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        )
    }
}