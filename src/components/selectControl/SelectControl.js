import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap';


const SelectControl = (props) => {
  const { data, type } = props;
  const formattedType = type.replace(/([A-Z])/g, ' $1').toUpperCase();

  return (
    <FormGroup controlId={type} bsSize="small">
      <ControlLabel>{formattedType}</ControlLabel>
      <FormControl
        componentClass="select"
        placeholder="select"
        onChange={props.handleSelectChange}
      >
        <option value="select" className="optionTitle">{formattedType}</option>
        {data.map((item, index) =>
          <option key={index} value={item} className="optionSelections">{item}</option>)}
      </FormControl>
    </FormGroup>

  );
};

SelectControl.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SelectControl;
