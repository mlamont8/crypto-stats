import React from "react";
import CoinForm from "../../containers/coinForm/CoinForm";
import SelectorModal from '../../containers/selectorModal/selectorModal';
import { connect } from "react-redux";
import { modalState } from "../../actions";

export class FirstPage extends React.Component {


  render() {
    return (
      <div className="frontContainer">
        {this.props.modal &&
          <SelectorModal />
        }
        <div className="frontLeft " />
        <div className="frontRight ">
          <div className="firstPageInfo">
            <CoinForm />
          </div>
          <div className="modalButton">
            <button type="button" onClick={this.props.modalToggle.bind(this, true)}>
              Get Started
            </button>

          </div>
        </div>

      </div>

    )
  }
};

const mapStateToProps = state => ({
  modal: state.modal.status,
});

const mapDispatchToProps = dispatch => ({
  modalToggle: (toggle) => {
    dispatch(modalState(toggle));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
