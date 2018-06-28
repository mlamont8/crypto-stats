import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavItem } from "react-bootstrap";
import SelectControl from "../../components/selectControl/SelectControl";
import { SelectData } from "../../actions";

class VertForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        this.props.selectorChange(e.target.id, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.search();
    }

    // After each select, update store with new variables adding current Market,
    // coin converting from and to.
    render() {
        const sortedMarket = Object.keys(this.props.marketArray).sort();

        return (
            <form onSubmit={this.handleSubmit}>
                <NavItem className="row">
                    <SelectControl
                        data={sortedMarket}
                        handleSelectChange={this.handleSelectChange}
                        type="market"
                    />
                </NavItem>

                <NavItem className="row">
                    <SelectControl
                        data={Object.keys(this.props.convertFrom).sort()}
                        handleSelectChange={this.handleSelectChange}
                        type="convertFrom"
                    />
                </NavItem>

                <NavItem className="row">
                    <SelectControl
                        data={this.props.toArray}
                        handleSelectChange={this.handleSelectChange}
                        type="convertTo"
                    />
                </NavItem>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    search: () => {
        dispatch({ type: "SEARCH_REQUEST" });
    },
    selectorChange: (id, item) => {
        dispatch(SelectData(id, item));
    }
});

const mapStateToProps = state => ({
    marketArray: state.searchArrays.marketArray,
    marketTerm: state.searchTerm.market,
    fromTerm: state.searchTerm.convertFrom,
    convertFrom: state.searchArrays.convertFrom,
    toArray: state.searchArrays.convertTo,
    cNameFrom: state.coinName.convertFrom,
    cNameTo: state.coinName.convertTo
});

VertForm.propTypes = {
    search: PropTypes.func.isRequired,
    selectorChange: PropTypes.func.isRequired,
    marketArray: PropTypes.objectOf(PropTypes.object),
    marketTerm: PropTypes.string,
    fromTerm: PropTypes.string,
    convertFrom: PropTypes.objectOf(PropTypes.array),
    toArray: PropTypes.arrayOf(PropTypes.string),
    cNameFrom: PropTypes.string,
    cNameTo: PropTypes.string
};

VertForm.defaultProps = {
    marketArray: {},
    marketTerm: "",
    fromTerm: "",
    convertFrom: {},
    toArray: [],
    cNameFrom: "",
    cNameTo: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(VertForm);
