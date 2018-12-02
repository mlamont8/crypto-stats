import React from 'react';
import { connect } from "react-redux";
import { SelectData } from "../../actions";


export class SelectorModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            idObject: {},
        }
        this.setObject = this.setObject.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: 'market',
            idObject: this.props.marketArray
        });
    }

    // Returns the current selectable object along with
    // the type
    setObject() {
        const { market, convertFrom, marketArray, fromArray, toArray } = this.props;
        if (market === undefined) {
            return {
                id: "market",
                data: { ...marketArray }
            };
        } else if (market !== undefined && convertFrom === undefined) {
            return {
                id: "convertFrom",
                data: { ...fromArray }
            }
        } else {
            return {
                id: "convertTo",
                data: { ...toArray }
            }
        }
    }

    onOptionClick(item) {
        const id = this.state.id;
        console.log('onoptioncalled')
        console.log('optionclick item', item)
        if (id === 'market') {
            // send item with id of market
            console.log('before', this.state.marketArray)

            this.props.optionClick(id, item)
            console.log('after', this.state.marketArray)
            // set id to convertfrom
            this.setState({
                id: 'convertFrom',
                idObject: this.state.convertFrom
            })
            // pull fromArray


        } else if (id === 'convertFrom') {
            // send item with id of convertFrom
            // set id to convertTo
            // pull toArray, set to idobject in state
        }
        else {
            //send item with id of convertTo
            // dispatch search
            //close modal
            //show results
        }

    }

    render() {

        // get object from state
        let currentArray = this.state.idObject;

        console.log({ currentArray })
        return (
            <div className="modalContainer">
                <div className="modalContent">
                    <div className="selectorItems">
                        {Object.keys(currentArray).sort().map(item =>
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
        market: state.searchTerm.market,
        convertFrom: state.searchTerm.convertFrom,
        convertTo: state.searchTerm.convertTo,
        marketArray: state.searchArrays.marketArray,
        fromArray: state.searchArrays.convertFrom,
        toArray: state.searchArrays.convertTo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        optionClick: (id, selection) => {
            dispatch(SelectData(id, selection));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorModal);