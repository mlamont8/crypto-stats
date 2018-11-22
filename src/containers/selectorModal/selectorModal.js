import React from 'react';
import { connect } from "react-redux";


export class SelectorModal extends React.Component {

    constructor(props) {
        super(props);
        this.setObject = this.setObject.bind(this);
    }

    // Sets the current viewable selections for user
    setObject() {
        const { market, convertFrom, marketArray, fromArray, toArray } = this.props;
        if (market === undefined) {
            return { ...marketArray };
        } else if (market !== undefined && convertFrom === undefined) {
            return { ...fromArray }
        } else {
            return { ...toArray }
        }
    }

    render() {
        const { market, marketArray } = this.props;
        console.log({ market });
        console.log({ marketArray });

        let currentArray = this.setObject();
        console.log('currentArray', currentArray);
        return (
            <div className="modalContainer">
                <div className="modalContent">
                    Modal Content
                <button type="button" onClick={this.props.handleClose}>Close</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        market: state.searchTerm.market,
        convertFrom: state.searchTerm.convertFrom,
        convertTo: state.searchTerm.convertTo,
        marketArray: state.searchArrays.marketArray,
        fromArray: state.searchArrays.convertFrom,
        toArray: state.searchArrays.convertTo,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         changeNotification: () => {
//             dispatch(notificationOption());
//         }
//     };
// };

export default connect(mapStateToProps, null)(SelectorModal);