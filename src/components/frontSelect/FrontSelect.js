import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const FrontSelect = () => {
  const markets = useSelector(state => state.searchArrays.currentArray);
  // const newMarkets = markets.map(market => {
  //   return { value: market, label: market };
  // });

  console.log({ markets });

  return (
    // <Select
    //   options={markets.map(market => {
    //     return { value: market, label: market };
    //   })}
    // />
    null
  );
};

export default FrontSelect;
