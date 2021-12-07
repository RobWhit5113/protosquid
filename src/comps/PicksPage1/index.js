import React, { useState, useEffect, useRef} from 'react';
import { useEasybase } from "easybase-react";
import moment from 'moment'


function PicksPage() {
  const [picksVal, setPicksVal] = useState("Please Choose Your Pick");
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(0)

  
  const {signOut, db, getUserAttributes} = useEasybase()

  const getInfo = async() => {
    var response = await getUserAttributes()
    return response
  }

  const handlePicksEntry = async () => {
    try {
      if (picksVal);

      await db('ENTRIES').insert({
        email: email,
        squidnumber: number,
        picks: picksVal,
        createdAt: moment().format('MM-DD-YYYY HH:mm:ss'),
      }).one()
      
      setPicksVal("");
    } catch (err) {
      console.log(err)
      alert("Please enter your picks")
    }
  }

  useEffect(()=> {
    getInfo().then(res => {
      setEmail(res.email)
      setNumber(res.number)
    })
  },)

  return (
    <div className='page-container'>
      <div className='header'>
        <div className='page-players-left'>
          <h2 className='players-left'>100 Players left</h2>
        </div>
        <div className='page-title'>
          <h1 className='title' > Welcome Player #{number}</h1>
        </div>
        <div className='page-jackpot'>
          <h2 className='jackpot'>$1,000</h2>
        </div>
      </div>
      <div className='picks-container'>
        <div className='directions-container'>
          <h3 className='directions'>Please choose a 3-team parlay</h3>
        </div>
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            {picksVal}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </div>
        <div className='button-container'>
          <button className='button' onClick={handlePicksEntry}>Enter Picks</button>
          <button className='button' onClick={signOut}>Sign Out </button>
        </div>
      </div>
    </div>
  )
}



export default PicksPage