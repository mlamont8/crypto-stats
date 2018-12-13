import React from "react";
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

        <div className="frontViewArea">
          <div className="titleArea">

            <h1>
              Cryptocoin price and history data
              </h1>
            <ul>
              <li>Price analysis</li>
              <li>Short and long term history</li>
              <li>Real time data</li>
            </ul>

            <button type="button" onClick={this.props.modalToggle.bind(this, true)}>Try it Now</button>
          </div>
          <svg id="curve" width="1400" height="300" xmlns="http://www.w3.org/2000/svg" svg="http://www.w3.org/2000/svg">
            <path d="m-0.60241,236.74699c336.14458,-68.6747 578.31326,-30.12049 734.93976,16.86747c156.6265,46.98795 687.95181,-46.98795 687.3494,-47.59036c-0.60241,-0.60241 -9.03615,104.21686 -9.63856,103.61445c-0.60241,-0.60241 -1412.6506,9.03615 -1412.04819,8.43374c0.60241,-0.60241 -336.74699,-12.6506 -0.60241,-81.3253z"
              fill="#FF0000" id="svg_1" />
          </svg>
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
