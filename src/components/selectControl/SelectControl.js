import React from "react";
import PropTypes from "prop-types";

const SelectControl = props => {
  const { data, type } = props;
  const formattedType = type.replace(/([A-Z])/g, " $1").toUpperCase();
  return (

    <select className="uk-select uk-form-small" id={type} onChange={props.handleSelectChange} >
      <option value="select" className="optionTitle">
        {formattedType}
      </option>
      {data.map(item => (
        <option key={item} value={item} className="optionSelections">
          {item}
        </option>
      ))}
    </select>


  );
};

SelectControl.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default SelectControl;
