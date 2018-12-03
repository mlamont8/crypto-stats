import React from 'react';
import { connect } from "react-redux";
import { SelectData } from "../../actions";


export class SelectorModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: 'market',
        });
    }



    onOptionClick(item) {
        const id = this.state.id;
        this.props.optionClick(id, item)
        if (id === 'market') {
            // send item with id of market
            // set id to convertfrom
            this.setState({
                id: 'convertFrom',
            })

        } else if (id === 'convertFrom') {
            // set id to convertTo
            this.setState({
                id: 'convertTo',
            })
        }
        else {

            // reset id
            this.setState({
                id: 'market',
            });
        }

    }

    render() {
        // get object from state
        const { currentArray } = this.props;
        return (
            <div className="modalContainer">
                <div className="modalContent">
                    <div className="selectorItems">
                        {currentArray.sort().map(item =>
                            <div key={item}>
                                <a onClick={this.onOptionClick.bind(this, { item }.item)}>{item}</a>
                            </div>)}
                    </div>
                    <button type="button" onClick={this.props.handleClose}>Close</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentArray: state.searchArrays.currentArray,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        optionClick: (id, selection) => {
            dispatch(SelectData(id, selection));
        },
        search: () => {
            dispatch({ type: "SEARCH_REQUEST" });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorModal);