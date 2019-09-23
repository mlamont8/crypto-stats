import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectData } from "../../actions/index";

// To use if user wants to search from current cryto-market when
// starting a search on the dash page
const GetCurrentMarket = props => {
  const dispatch = useDispatch();
  const { triggerNextStep } = props;
  const marketFetch = useSelector(state => {
    return state.searchTerm.currentMarket;
  });

  useEffect(() => {
    dispatch(SelectData("market", marketFetch));
    triggerNextStep();
  }, [dispatch, triggerNextStep, marketFetch]);

  return null;
};

export default GetCurrentMarket;
