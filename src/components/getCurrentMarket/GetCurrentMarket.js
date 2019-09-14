import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectData } from "../../actions/index";

const GetCurrentMarket = props => {
  const dispatch = useDispatch();
  const marketFetch = useSelector(state => {
    return state.searchTerm.currentMarket;
  });

  useEffect(() => {
    dispatch(SelectData("market", marketFetch));
    props.triggerNextStep();
  }, []);

  return null;
};

export default GetCurrentMarket;
