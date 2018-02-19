import React from 'react'
import ReactDOM from 'react-dom'
import Summary from './summary'

describe('summary', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Summary/>, div);
    })
}
)

