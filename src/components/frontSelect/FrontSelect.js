import React from "react";
import Select from "react-select";
import { useSelector } from "react-redux";

// const customStyles = {
//   container: () => ({
//     width: 200
//   })
// };

const FrontSelect = props => {
  const markets = useSelector(state => state.searchArrays.currentArray);
  console.log(markets);
  const marketArray =
    markets &&
    markets.map(item => {
      return { value: item, label: item };
    });

  return <Select className="select-container" options={marketArray} />;
};

export default FrontSelect;
