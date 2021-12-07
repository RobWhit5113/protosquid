import React, { useState, useEffect, useRef} from 'react';
import { useEasybase } from "easybase-react";
import moment from 'moment'
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import Picks1 from './Picks1';



function PicksPage() {
  const [picksVal, setPicksVal] = useState("Please Enter Your Picks");
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(0)
  const [step, setStep] = useState(0)
  let action = ''

  
  const {signOut, db, getUserAttributes} = useEasybase()


  const getInfo = async() => {
    var response = await getUserAttributes()
    return response
  }

  const handlePicksEntry = async () => {
    try {
      if (picksVal !== "Please Enter Your Picks"){
      await db('ENTRIES').insert({
        email: email,
        squidnumber: number,
        picks: picksVal,
        createdAt: moment().format('MM-DD-YYYY HH:mm:ss'),
      }).one()
      
      setPicksVal("");
      setStep(1)} else {
        alert("Please enter your picks")
      }

    } catch (err) {
      console.log(err)
      alert("Please enter your picks")
    }
  }

  const handleSignOut = () => {
    setStep(0)
    signOut()
  }

  const handleSelect = e => {
  setPicksVal(e)
  }

  useEffect(()=> {
    getInfo().then(res => {
      setEmail(res.email)
      setNumber(res.number)
    })
  },)

  if(step == 0){
    action = 
      <div className='picks-container'>
        <div className='directions-container'>
          <h3 className='directions'>Please choose a 3-team parlay</h3>
        </div>
        <div className="dropdown-selector">
          <DropdownButton id="dropdown-basic-button" title={picksVal} onSelect={handleSelect}>
            <Dropdown.Item eventKey='pick123'>Action</Dropdown.Item>
            <Dropdown.Item eventKey='pick456'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='pick789'>Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='button-container'>
          <Button variant='primary' className='button' onClick={handlePicksEntry}>Enter Picks</Button>
        </div>
      </div>
        
      
  } else if (step == 1){
    action = 
    <div className='signout-container'>
      <div className='message-container'>
        <h2>Thank you for your entry, good luck</h2>
      </div>
      <div className='signout-request-container'>
        <h3>Please signout</h3>
      </div>
      <div className='signout-button-container'>
        <Button variant='primary' className='button' onClick={handleSignOut}>Sign Out </Button>
      </div>
    </div>
  }

  return (
    <div className='page-container'>
      <div className='header'>
        <div className='page-players-left'>
          <Card>
            <Card.Body>100 Players Left</Card.Body>
          </Card>
        </div>
        <div className='page-title'>
          <h1 className='title' > Welcome Player #{number}</h1>
        </div>
        <div className='page-jackpot'>
          <Card>
            <Card.Body>Jackpot: $1,000</Card.Body>
          </Card>
        </div>
      </div>
      {action}
    </div>
  )
}



export default PicksPage