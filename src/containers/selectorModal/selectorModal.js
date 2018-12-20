import React from 'react';
import { connect } from "react-redux";
import { SelectData, idUpdate } from "../../actions";

// Receives props from state tree
// Child of firstPage.js and Main.js

export class SelectorModal extends React.Component {

    constructor(props) {
        super(props);
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    // Updates to new id after click
    onOptionClick(item) {

        const { id } = this.props;
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
            this.props.closeModal()
        }
    }

    // Offers user instructions in Modal Header
    instructs() {
        const { id, errorItem } = this.props;
        if (errorItem) {
            return `ERROR: ${errorItem} not found at this time`
        } else if (id === 'market') {

            return "Choose a market"

        } else if (id === 'convertFrom') {
            return "Choose your coin"
        }
        else {
            return "Choose your conversion currency"
        }

    }

    render() {
        // get object from state store
        const { currentArray, currentMarket, currentFrom } = this.props;
        const instructions = this.instructs();

        return (
            <div className="modalContainer">
                <div className="modalContent">

                    <div className="modalInstructions">
                        <div>{instructions}</div>
                        <div>
                            <button type="button" onClick={this.props.searchReset}>Reset</button>
                            <button type="button" onClick={this.props.closeModal}>Close</button>
                        </div>
                    </div>

                    <div className="modalHeader">
                        <div>{currentMarket} </div>
                        <div>{currentFrom}</div>
                    </div>

                    <div className="modalAlerts">
                        Alerts
                    </div>
                    {currentArray &&
                        <div className="selectorItems">
                            {currentArray.sort().map(item =>
                                <div key={item}>
                                    <a onClick={this.onOptionClick.bind(this, { item }.item)}>{item}</a>
                                </div>)}
                        </div>
                    }
                    <div className="modalFooter">
                        <button type="button" onClick={this.props.closeModal}>Close</button>
                        <button type="button" onClick={this.props.searchReset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentArray: state.searchArrays.currentArray,
        id: state.searchArrays.currentID,
        currentMarket: state.searchTerm.market,
        currentFrom: state.searchTerm.convertFrom,
        errorType: state.errors.type,
        errorItem: state.errors.item,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        optionClick: (id, selection) => {
            dispatch(SelectData(id, selection));
        },
        closeModal: () => {
            dispatch({ type: "CLOSE_ACTION" });
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