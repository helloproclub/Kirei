import React from 'react';
import './button.css'

export default class Button extends React.Component {
    // constructor memanggil constructor react compoennt
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <div className="button" onClick={() => this.props.sayHi()}>Hello { this.state.name }</div>
        )
    }
}
