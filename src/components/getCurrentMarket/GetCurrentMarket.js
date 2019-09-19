import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectData } from "../../actions/index";

const GetCurrentMarket = props => {
  const dispatch = useDispatch();
  const { triggerNextStep } = props;
  const marketFetch = useSelector(state => {
    return state.searchTerm.currentMarket;
  });

  useEffect(() => {
    dispatch(SelectData("market", marketFetch));
    triggerNextStep();
  }, [dispatch, triggerNextStep]);

  return null;
};

export default GetCurrentMarket;
