import React from 'react';
import { connect } from "react-redux";
import { SelectData, modalState, idUpdate } from "../../actions";

// Receives props from state tree

export class SelectorModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    // Updates to new id after click
    onOptionClick(item) {

        const id = this.props.id;
        // send item with current id
        this.props.optionClick(id, item)
        if (id === 'market') {

            // set id to convertfrom
            this.props.idUpdate('convertFrom')

        } else if (id === 'convertFrom') {
            // set id to convertTo
            this.props.idUpdate('convertTo')
        }
        else {
            // reset id
            this.props.idUpdate('market')
            // Set modal to closed
            this.props.modalStatus(false)
        }
    }

    render() {
        // get object from state store
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
                    <button type="button" onClick={this.props.modalStatus.bind(this, false)}>Close</button>
                    <button type="button" onClick={this.props.searchReset}>Reset</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentArray: state.searchArrays.currentArray,
        id: state.searchArrays.currentID
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
        modalStatus: (toggle) => {
            dispatch(modalState(toggle));
        },
        searchReset: () => {
            dispatch({ type: "NEW_RESET" });
        },
        idUpdate: (id) => {
            dispatch(idUpdate(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorModal);