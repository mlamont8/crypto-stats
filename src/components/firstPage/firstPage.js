import React from "react";
import SelectorModal from "../../containers/selectorModal/selectorModal";
import ChatForm from "../../containers/chatForm/ChatForm";
import { connect, useDispatch, useSelector } from "react-redux";
import FrontSelect from "../frontSelect/FrontSelect";

const FirstPage = () => {
  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal.status);

  return (
    <div className="frontContainer">
      {modal && <SelectorModal />}

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
            onClick={() => dispatch({ type: "SEARCH_MODAL_REQUEST" })}
          >
            Try it Now
          </button>
          <FrontSelect />
        </div>
      </div>
    </div>
  );
};
export default FirstPage;

// const mapStateToProps = state => ({
//   modal: state.modal.status
// });

// const mapDispatchToProps = dispatch => ({
//   initialSearch: () => {
//     dispatch({ type: "SEARCH_MODAL_REQUEST" });
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FirstPage);
