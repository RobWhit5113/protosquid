import React, { useState, useEffect, useRef} from 'react';
import { useEasybase } from "easybase-react";
import moment from 'moment'
import { Card, Button, DropdownButton, Dropdown, ListGroup, ButtonGroup } from 'react-bootstrap';
import { send } from 'emailjs-com'

function PicksPage() {
  const [picksVal, setPicksVal] = useState("Choose Selection");
  // const [picksVal2, setPicksVal2] = useState("Choose Option");
  // const [picksVal3, setPicksVal3] = useState("Please Choose a Team");
  
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(0)
  const [step, setStep] = useState(0)
  let action = ''

  
  const {signOut, db, getUserAttributes, e} = useEasybase()


  //gets user information from Easybase
  const getInfo = async() => {
    var response = await getUserAttributes()
    return response
  }
  
  //picks submission
  const handlePicksEntry = async () => {
    console.log(picksVal)
    try {
      if (picksVal !== "Choose Selection"){
      await db('ENTRIES').insert({
        email: email,
        squidnumber: number,
        picks: picksVal,
        // picks2: picksVal2,
        // picks3: picksVal3,
        createdAt: moment().format('MM-DD-YYYY HH:mm:ss'),
      }).one()

      const emailParams = {
        picksVal,
        // picksVal2,
        email
      }

      send('service_bzmlyac', 'template_7llr3mp', emailParams, 'user_O754s7DH7re8j3oRghLIE' )

      setPicksVal("");
      // setPicksVal2("");
      setStep(1)} 
      
      else {
        alert("Please enter your picks and follow directions")
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
  const handleSelect = (e) => {
   setPicksVal(e)
   
  
  }

  // const handleSelect2 = e => {
  // setPicksVal2(e)
  // }
  // const handleSelect3 = e => {
  // setPicksVal3(e)
  // }

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
      // <>
      //   <div className='page-title'>
      //     <h1 className='title' > Welcome Player #{number}</h1>
      //   </div>
      //   <div className='header'>
      //     <div className='page-players-left'>
      //       <Card className='players-left-card'>
      //         <Card.Body>38 Players Left</Card.Body>
      //       </Card>
      //     </div>
      //     <div className='page-jackpot'>
      //       <Card className='jackpot-card'>
      //         <Card.Body>Jackpot: $1,000</Card.Body>
      //       </Card>
      //     </div>
      //   </div>
      //   <div className='directions-container'>
      //       <h3 className='directions'>Please enter your selection for Sunday's O/U NFL Game: </h3>
      //   </div>
      //   <div className='picks-container'>  
      //   <div className='directions-container'>
      //       <h5 className='directions'>Please Choose a Game Here: </h5>
      //   </div>
      //     <div id='team-pick'className="dropdown-selector">
      //       <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
      //         <Dropdown.Item eventKey='BAL v CLE (42.5)'>BAL v CLE (42.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='JAC v TEN (44)'>JAC v TEN (44)</Dropdown.Item>
      //         <Dropdown.Item eventKey='LA v KC (48.5)'>LV v KC (48.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='NO v NYJ (43.5)'>NO v NYJ (43.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='DAL v WAS (48.5)'>DAL v WAS (48.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='ATL v CAR (42.5)'>ATL v CAR (42.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='SEA v HOU (41.5)'>SEA v HOU (41.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='DET v DEN (42)'>DET v DEN (42)</Dropdown.Item>
      //         <Dropdown.Item eventKey='NYG v LAC (44.5)'>NYG v LAC (44.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='SF v CIN (47.5)'>SF v CIN (47.5)</Dropdown.Item>
      //         <Dropdown.Item eventKey='BUF v TB (53)'>BUF v TB (53)</Dropdown.Item>
      //       </DropdownButton>
      //     </div>
      //     <div className='directions-container'>
      //       <h5 className='directions'>Please Choose O/U Here: </h5>
      //   </div>
      //     <div id='over-pick'className="dropdown-selector">
      //       <DropdownButton id="dropdown-basic-button2" title={picksVal2} onSelect={handleSelect2} size='lg'>
      //         <Dropdown.Item eventKey='Over'>Over</Dropdown.Item>
      //         <Dropdown.Item eventKey='Under'>Under</Dropdown.Item>
      //       </DropdownButton>
      //     </div>
      //     <div className='enter-picks-button-container'>
      //       <Button variant='primary' id='button' onClick={handlePicksEntry} size='lg'>Enter Picks</Button>
      //     </div>
      //   </div>
      // </>
      ///////////////////////////////////day 2//////////////////////////////////////////////////////////////////
      // <>
      //   <div className='page-title'>
      //     <h1 className='title' > Welcome Player #{number}</h1>
      //   </div>
      //     <div className='header'>
      //       <div className='page-players-left'>
      //         <Card className='players-left-card'>
      //           <Card.Body>17 Players Left</Card.Body>
      //         </Card>
      //       </div>
      //       <div className='page-jackpot'>
      //         <Card className='jackpot-card'>
      //           <Card.Body>Jackpot: $1,000</Card.Body>
      //         </Card>
      //       </div>
      //     </div>
      //   <div className='directions-container'>
      //     <h3 className='directions'>Please enter your selection for Monday's MNF Winner: </h3>
      //   </div>
      //   <div className='picks-container'>
      //     <div id='team-pick'className="dropdown-selector">
      //       <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
      //         <Dropdown.Item eventKey='LAR'>LAR</Dropdown.Item>
      //         <Dropdown.Item eventKey='ARI'>ARI</Dropdown.Item>
      //       </DropdownButton>
      //     </div>
      //     {/* CHANGE OVER CHECKLIST
      //         comment out uneeded picksVals
      //         Check state values
      //         Check the submit handler
      //         Run a test pick
      //         Run a false test pick
      //         Change Email 
      //         Check the email picks*/}
      //     <div className='enter-picks-button-container'>
      //       <Button variant='primary' id='button' onClick={handlePicksEntry} size='lg'>Enter Picks</Button>
      //     </div>
      //   </div>
      // </>
      ///////////////////////////////////day 3//////////////////////////////////////////////////////////////////
    // <>
      
    //   <div className='page-title'>
    //     <h1 className='title' > Welcome Player #{number}</h1>
    //    </div>
    //    <div className='header'>
    //     <div className='page-players-left'>
    //       <Card className='players-left-card'>
    //         <Card.Body>6 Players Left</Card.Body>
    //       </Card>
    //     </div>
    //     <div className='page-jackpot'>
    //       <Card className='jackpot-card'>
    //         <Card.Body>Jackpot: $1,000</Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    //   <div className='directions2-container'>
    //     <h5 className='directions'>NBA Games Tonight:</h5>
    //     <ListGroup horizontal={'sm'} className='games-list'>
    //       <ListGroup.Item>TOR v BKN</ListGroup.Item>
    //       <ListGroup.Item>GS v NYK</ListGroup.Item>
    //       <ListGroup.Item>PHX v POR</ListGroup.Item>
    //     </ListGroup>
    //  </div>
    //   <div className='directions-container'>
    //     <h3 className='directions'>Please enter your selection for Tuesday's NBA Winner: </h3>
    //  </div>
    //   <div className='picks-container'>
    //     <div id='team-pick'className="dropdown-selector">
    //        <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
    //          <Dropdown.Item eventKey='TOR'>TOR</Dropdown.Item>
    //          <Dropdown.Item eventKey='BKN'>BKN</Dropdown.Item>
    //          <Dropdown.Item eventKey='GS'>GS</Dropdown.Item>
    //          <Dropdown.Item eventKey='NYK'>NYK</Dropdown.Item>
    //          <Dropdown.Item eventKey='PHX'>PHX</Dropdown.Item>
    //          <Dropdown.Item eventKey='POR'>POR</Dropdown.Item>
    //        </DropdownButton>
    //      </div>
        //  MIGHT JUST BE ONE SELECTION  
        //  <div id='over-pick'className="dropdown-selector">
        //    <DropdownButton id="dropdown-basic-button2" title={picksVal2} onSelect={handleSelect2} size='lg'>
        //      <Dropdown.Item eventKey={pickChoice1}>Over</Dropdown.Item>
        //      <Dropdown.Item eventKey={pickChoice2}>Under</Dropdown.Item>
        //    </DropdownButton>
        //  </div> 
        // CHANGE OVER CHECKLIST
        //     comment out uneeded picksVals
        //     Check state values
        //     Check the submit handler
        //     Run a test pick
        //     Run a false test pick 
        //     Check the email picks
    //     <div className='enter-picks-button-container'>
    //       <Button variant='primary' id='button' onClick={handlePicksEntry}>Enter Picks</Button>
    //     </div>
    //   </div>
    // </>
      ///////////////////////////////////day 4//////////////////////////////////////////////////////////////////
    // <>
    // <div className='page-title'>
    //   <h1 className='title' > Welcome Player #{number}</h1>
    // </div>
    //   <div className='header'>
    //     <div className='page-players-left'>
    //       <Card className='players-left-card'>
    //         <Card.Body>6 Players Left</Card.Body>
    //       </Card>
    //     </div>
    //     <div className='page-jackpot'>
    //       <Card className='jackpot-card'>
    //         <Card.Body>Jackpot: $1,000</Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // <div className='directions-container'>
    //   <h3 className='directions'>Please enter your selection for Thursday's Anytime TD Scorer: </h3>
    // </div>
    // <div className='picks-container-buttons'>
    //   <div id='team-pick'className="dropdown-selector">
    //     <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
    //       <Dropdown.Item eventKey='Austin Ekeler' style={{background:'rgb(0,128,198)', color:'white'}}>Austin Ekeler</Dropdown.Item>
    //       <Dropdown.Item eventKey='Tyreek Hill' style={{background:'rgb(227,24,55)', color:'white'}}>Tyreek Hill</Dropdown.Item>
    //       <Dropdown.Item eventKey='Clyde Edwards-Helaire' style={{background:'rgb(227,24,55)', color:'white'}}>Clyde Edwards-Helaire</Dropdown.Item>
    //       <Dropdown.Item eventKey='Travis Kelce' style={{background:'rgb(227,24,55)', color:'white'}}>Travis Kelce</Dropdown.Item>
    //       <Dropdown.Item eventKey='Keenan Allen' style={{background:'rgb(0,128,198)', color:'white'}}>Keenan Allen</Dropdown.Item>
    //       <Dropdown.Item eventKey='Mike Williams' style={{background:'rgb(0,128,198)', color:'white'}}>Mike Williams</Dropdown.Item>
    //       <Dropdown.Item eventKey='Darrel Williams' style={{background:'rgb(227,24,55)', color:'white'}}>Darrel Williams</Dropdown.Item>
    //       <Dropdown.Item eventKey='Jalen Guyton' style={{background:'rgb(0,128,198)', color:'white'}}>Jalen Guyton</Dropdown.Item>
    //       <Dropdown.Item eventKey='Jared Cook' style={{background:'rgb(0,128,198)', color:'white'}}>Jared Cook</Dropdown.Item>
    //       <Dropdown.Item eventKey='Patrick Mahomes' style={{background:'rgb(227,24,55)', color:'white'}}>Patrick Mahomes</Dropdown.Item>
    //       <Dropdown.Item eventKey='Mecole Hardman' style={{background:'rgb(227,24,55)', color:'white'}}>Mecole Hardman</Dropdown.Item>
    //       <Dropdown.Item eventKey='Byron Pringle' style={{background:'rgb(227,24,55)', color:'white'}}>Byron Pringle</Dropdown.Item>
    //       <Dropdown.Item eventKey='Justin Herbert' style={{background:'rgb(0,128,198)', color:'white'}}>Justin Herbert</Dropdown.Item>
    //       <Dropdown.Item eventKey='Demarcus Robinson' style={{background:'rgb(227,24,55)', color:'white'}}>Demarcus Robinson</Dropdown.Item>
    //       <Dropdown.Item eventKey='Justin Jackson' style={{background:'rgb(0,128,198)', color:'white'}}>Justin Jackson</Dropdown.Item>
    //       <Dropdown.Item eventKey='Donald Parham Jr.' style={{background:'rgb(0,128,198)', color:'white'}}>Donald Parham Jr.</Dropdown.Item>
    //     </DropdownButton>
    //   </div>
    //       <div className='enter-picks-button-container'>
    //         <Button variant='primary' id='button' onClick={handlePicksEntry} size='lg'>Enter Picks</Button>
    //       </div>
    //     </div>
    //   </>
      ///////////////////////////////////day 5//////////////////////////////////////////////////////////////////
    // <>
    // <div className='page-title'>
    //   <h1 className='title' > Welcome Player #{number}</h1>
    // </div>
    //   <div className='header'>
    //     <div className='page-players-left'>
    //       <Card className='players-left-card'>
    //         <Card.Body> Players Left</Card.Body>
    //       </Card>
    //     </div>
    //     <div className='page-jackpot'>
    //       <Card className='jackpot-card'>
    //         <Card.Body>Jackpot: $1,000</Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // <div className='directions-container'>
    //   <h3 className='directions'>Make your selection below: </h3>
    // </div>
    // <div className='picks-container-buttons'>
    //   <div id='team-pick'className="dropdown-selector">
    //     <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
    //       <Dropdown.Item eventKey='IND -2.5 / Over 44.5'>IND -2.5 / Over 44.5</Dropdown.Item>
    //       <Dropdown.Item eventKey='IND -2.5 / Under 44.5'>IND -2.5 /Under 44.5</Dropdown.Item>
    //       <Dropdown.Item eventKey='NE +2.5 / Over 44.5'>NE +2.5 / Over 44.5</Dropdown.Item>
    //       <Dropdown.Item eventKey='NE -2.5 / Under 44.5'>NE -2.5 / Under 44.5</Dropdown.Item>         
    //     </DropdownButton>
    //   </div>
    //       <div className='enter-picks-button-container'>
    //         <Button variant='primary' id='button' onClick={handlePicksEntry} size='lg'>Enter Picks</Button>
    //       </div>
    //     </div>
    //   </>
            ///////////////////////////////////day 6//////////////////////////////////////////////////////////////////
    <>
    <div className='page-title'>
      <h1 className='title' > Welcome Player #{number}</h1>
    </div>
      <div className='header'>
        <div className='page-players-left'>
          <Card className='players-left-card'>
            <Card.Body>1 Player Left</Card.Body>
          </Card>
        </div>
        <div className='page-jackpot'>
          <Card className='jackpot-card'>
            <Card.Body>Jackpot: $1,000</Card.Body>
          </Card>
        </div>
      </div>
    <div className='directions-container'>
      <h3 className='directions'>Will Mike Evans Score A TD Tonight? </h3>
    </div>
    <div className='picks-container-buttons'>
      <div id='team-pick'className="dropdown-selector">
        <DropdownButton id="dropdown-basic-button1" title={picksVal} onSelect={handleSelect} size='lg'>
          <Dropdown.Item eventKey='Yes'>Yes</Dropdown.Item>
          <Dropdown.Item eventKey='No'>No</Dropdown.Item>
        </DropdownButton>
      </div>
          <div className='enter-picks-button-container'>
            <Button variant='primary' id='button' onClick={handlePicksEntry} size='lg'>Enter Picks</Button>
          </div>
        </div>
      </>

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
      {action}
    </div>
  )
}



export default PicksPage

