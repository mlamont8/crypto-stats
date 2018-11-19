import React from 'react';
import { connect } from "react-redux";


class SelectorModal extends React.Component {

    render() {
        const { market, convertFrom, convertTo, marketArray, fromArray, toArray } = this.props;
        let currentArray = {};
        console.log({ market });
        console.log({ marketArray });
        if (market === false) { currentArray = marketArray; }
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