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
            <Dropdown.Item eventKey='BAL v CLE'>BAL v CLE (42.5)</Dropdown.Item>
            <Dropdown.Item eventKey='JAC v TEN'>JAC v TEN (44)</Dropdown.Item>
            <Dropdown.Item eventKey='LA v KC'>LV v KC (48.5)</Dropdown.Item>
            <Dropdown.Item eventKey='NO v NYJ'>NO v NYJ (43.5)</Dropdown.Item>
            <Dropdown.Item eventKey='DAL v WAS'>DAL v WAS (48.5)</Dropdown.Item>
            <Dropdown.Item eventKey='ATL v CAR'>ATL v CAR (42.5)</Dropdown.Item>
            <Dropdown.Item eventKey='SEA v HOU'>SEA v HOU (41.5)</Dropdown.Item>
            <Dropdown.Item eventKey='DET v DEN'>DET v DEN (42)</Dropdown.Item>
            <Dropdown.Item eventKey='NYG v LAC'>NYG v LAC (44.5)</Dropdown.Item>
            <Dropdown.Item eventKey='SF v CIN'>SF v CIN (47.5)</Dropdown.Item>
            <Dropdown.Item eventKey='BUF v TB'>BUF v TB (53)</Dropdown.Item>
          </DropdownButton>
        </div>
        
    </div>
)}

export default Picks1