import React from 'react'
import { connect } from 'react-redux'

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Incrementar</button>
                <span>{this.props.count}</span>
                <button onClick={this.decrement}>Decrementar</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);