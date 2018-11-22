import React from "react";
import CoinForm from "../../containers/coinForm/CoinForm";
import SelectorModal from '../../containers/selectorModal/selectorModal';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    })
  }

  closeModal() {
    this.setState({
      show: false
    })
  }

  render() {
    return (


      <div className="frontContainer">
        {this.state.show &&
          <SelectorModal
            show={this.state.show}
            handleClose={this.closeModal}
          />
        }
        <div className="frontLeft " />
        <div className="frontRight ">
          <div className="firstPageInfo">
            <CoinForm />
          </div>
          <div className="modalButton">
            <button type="button" onClick={this.showModal}>
              Get Started
            </button>

          </div>
        </div>

      </div>

    )
  }
};

export default FirstPage;
