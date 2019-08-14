import React from "react";
import SelectorModal from "../../containers/selectorModal/selectorModal";
import { connect } from "react-redux";

export class FirstPage extends React.Component {
  render() {
    return (
      <div className="frontContainer">
        {this.props.modal && <SelectorModal />}

        <div className="frontViewArea">
          <div className="titleArea">
            <h2>Cryptocoin price and history data</h2>
            <ul>
              <li>Price analysis</li>
              <li>Short and long term history</li>
              <li>Real time data</li>
            </ul>

            <button
              type="button"
              onClick={this.props.initialSearch.bind(this, true)}
            >
              Try it Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal.status
});

const mapDispatchToProps = dispatch => ({
  initialSearch: () => {
    dispatch({ type: "SEARCH_MODAL_REQUEST" });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
