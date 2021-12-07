import React, { useState, useEffect, useRef} from 'react';
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';


function Picks1 ({picksVal, setPicksVal}) {

const handleSelect = e => {
  setPicksVal(e)
  console.log(e)
}

return(
  <div className='picks-container'>
        <div className='directions-container'>
          <h3 className='directions'>Please choose a 3-team parlay</h3>
        </div>
        <div className="dropdown-selector">
          <DropdownButton id="dropdown-basic-button" title="Choose Picks Here" onSelect={handleSelect}>
            <Dropdown.Item eventKey='pick123'>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        
    </div>
)}

export default Picks1