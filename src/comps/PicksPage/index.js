import React, { useState, useEffect, useRef} from 'react';
import { useEasybase } from "easybase-react";
import moment from 'moment'
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { send } from 'emailjs-com'

function PicksPage() {
  const [picksVal, setPicksVal] = useState("Please Enter The Game");
  const [picksVal2, setPicksVal2] = useState("Please Enter O/U")
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(0)
  const [step, setStep] = useState(0)
  // const [toSend, setToSend] = useState({
  //   from_name:'ProtoProfit',
  //   message: ''
  // });
  let action = ''

  
  const {signOut, db, getUserAttributes, e} = useEasybase()


  //gets user information from Easybase
  const getInfo = async() => {
    var response = await getUserAttributes()
    return response
  }
  
  //picks submission
  const handlePicksEntry = async () => {

    try {
      if (picksVal !== "Please Enter The Game" && picksVal2 !== "Please Enter O/U"){
      await db('ENTRIES').insert({
        email: email,
        squidnumber: number,
        picks: picksVal,
        picks2: picksVal2,
        createdAt: moment().format('MM-DD-YYYY HH:mm:ss'),
      }).one()

      const emailParams = {
        picksVal,
        picksVal2,
        email
      }

      send('service_bzmlyac', 'template_7llr3mp', emailParams, 'user_O754s7DH7re8j3oRghLIE' )

      setPicksVal("");
      setPicksVal2("");
      setStep(1)} 
      
      else {
        alert("Please enter your picks")
      }

    } catch (err) {
      console.log(err)
    }
  }

  //signout
  const handleSignOut = () => {
    setStep(0)
    signOut()
  }

  //picks entry
  const handleSelect = e => {
  setPicksVal(e)
  }

  const handleSelect2 = e => {
  setPicksVal2(e)
  }

  useEffect(()=> {
    getInfo().then(res => {
      setEmail(res.email)
      setNumber(res.number)
      
    })
  },)

  // steps to show the picks or the signout components
  if(step == 0){
    action = 
    ///////////////////////////////////day 1//////////////////////////////////////////////////////////////////
      <div className='picks-container'>
        <div className='directions-container'>
          <h3 className='directions'>Please enter your selection for Sunday's O/U NFL Game: </h3>
        </div>
        <div id='team-pick'className="dropdown-selector">
          <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
            <Dropdown.Item eventKey='BAL v CLE (42.5)'>BAL v CLE (42.5)</Dropdown.Item>
            <Dropdown.Item eventKey='JAC v TEN (44)'>JAC v TEN (44)</Dropdown.Item>
            <Dropdown.Item eventKey='LA v KC (48.5)'>LV v KC (48.5)</Dropdown.Item>
            <Dropdown.Item eventKey='NO v NYJ (43.5)'>NO v NYJ (43.5)</Dropdown.Item>
            <Dropdown.Item eventKey='DAL v WAS (48.5)'>DAL v WAS (48.5)</Dropdown.Item>
            <Dropdown.Item eventKey='ATL v CAR (42.5)'>ATL v CAR (42.5)</Dropdown.Item>
            <Dropdown.Item eventKey='SEA v HOU (41.5)'>SEA v HOU (41.5)</Dropdown.Item>
            <Dropdown.Item eventKey='DET v DEN (42)'>DET v DEN (42)</Dropdown.Item>
            <Dropdown.Item eventKey='NYG v LAC (44.5)'>NYG v LAC (44.5)</Dropdown.Item>
            <Dropdown.Item eventKey='SF v CIN (47.5)'>SF v CIN (47.5)</Dropdown.Item>
            <Dropdown.Item eventKey='BUF v TB (53)'>BUF v TB (53)</Dropdown.Item>
          </DropdownButton>
        </div>
        <div id='over-pick'className="dropdown-selector">
          <DropdownButton id="dropdown-basic-button2" title={picksVal2} onSelect={handleSelect2} size='lg'>
            <Dropdown.Item eventKey='Over'>Over</Dropdown.Item>
            <Dropdown.Item eventKey='Under'>Under</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='button-container'>
          <Button variant='primary' id='button' onClick={handlePicksEntry}>Enter Picks</Button>
        </div>
      </div>
      
  }else if (step == 1){
    action = 
    <div className='signout-container'>
      <div className='message-container'>
        <h2>Thank you for your entry, good luck</h2>
      </div>
      <div className='signout-request-container'>
        <h3>Please signout</h3>
      </div>
      <div className='signout-button-container'>
        <Button variant='primary' id='button' onClick={handleSignOut} size='lg'>Sign Out </Button>
      </div>
    </div>
  }

  //essentially header and action below that
  return (
    <div className='page-container'>
      <div className='header'>
        <div className='page-players-left'>
          <Card className='players-left-card'>
            <Card.Body>100 Players Left</Card.Body>
          </Card>
        </div>
        <div className='page-title'>
          <h1 className='title' > Welcome Player #{number}</h1>
        </div>
        <div className='page-jackpot'>
          <Card className='jackpot-card'>
            <Card.Body>Jackpot: $1,000</Card.Body>
          </Card>
        </div>
      </div>
      {action}
    </div>
  )
}



export default PicksPage

