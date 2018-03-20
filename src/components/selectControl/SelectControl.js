import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'


  const SelectControl = (props) => {
    const { data, type } = props
    return (
      <div className="col-md-4">
        <FormGroup controlId={type}>
        <ControlLabel>{type.toUpperCase()}</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={props.handleSelectChange}>
             {data.map((item, index) =>
               <option key={index} value={item}>{item}</option>
             )}
          </FormControl>
      </FormGroup>
      </div>
    )

}

SelectControl.propTypes = {
  data: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func,
  type: PropTypes.string.isRequired
}

export default SelectControl
