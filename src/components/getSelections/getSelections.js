import React from "react";
import { useSelector } from "react-redux";

function GetSelections(props) {
  const selections = useSelector(state => state.searchArrays.currentArray);
  console.log({ selections });
  return true;
}
export default GetSelections;
