import React from 'react'
import { connect } from 'react-redux'
import { fetchCoinList } from '../actions'

class Main extends React.Component {

    componentDidMount() {
        this.props.data()
    }

    render() {
        return (
            <p>Main Component</p>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        data: () => {
            dispatch(fetchCoinList())
        }
    }
}

export default connect(null, mapDispatchToProps)(Main)
