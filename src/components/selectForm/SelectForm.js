import React from 'react'
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'



const SelectForm = (props) => {
  console.log(props.data, 'form select')
  let market = props.type
  let data = props.data
  return data === []
    ? null
    :
    <FormGroup controlId={market}>

      <ControlLabel>{market}</ControlLabel>

      <FormControl componentClass="select" placeholder="select">
        {data.map(({ market }, index) =>
          <option key={index} value={market}>{market}</option>
        )}
      </FormControl>
    </FormGroup>


}

export default SelectForm
