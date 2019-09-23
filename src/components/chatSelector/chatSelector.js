import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { SelectData } from "../../actions/index";

const ChatSelector = props => {
  const dispatch = useDispatch();
  const stateArray = useSelector(state => state.searchArrays.currentArray);

  const selectArray =
    stateArray &&
    stateArray.map(item => {
      return { value: item, label: item };
    });

  const handleChange = selectedOption => {
    dispatch(SelectData(props.id, selectedOption.value));
    props.triggerNextStep({ value: selectedOption.value });
  };
  return (
    <Select
      className="select-container"
      options={selectArray}
      onChange={handleChange}
    />
  );
};

export default ChatSelector;
