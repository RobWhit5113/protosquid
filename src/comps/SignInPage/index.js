import React, { useState, useEffect } from 'react';
import { useEasybase } from "easybase-react";
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';




function SignInPage() {
  const [userVal, setUserVal] = useState("");
  const [userPas, setUserPas] = useState("Password1")
  
  const {signIn} = useEasybase()
  const clearInputs = () => {
    setUserVal("");
  }

  const handleSignInPress = async () => {
    await signIn(userVal, userPas);
    // clearInputs();
  }



  return (
    <div className='page-container'>
      <div className='header'>
        <h1 className='title'>proto squid games</h1>
      </div>
      <div className='picks-container'>
        <FormControl  value={userVal} onChange={e => setUserVal(e.target.value)}  placeholder="email" />
        <div className='button-container'>
          <Button variant="primary" onClick={handleSignInPress}>Sign In</Button> {' '}
        </div>
      </div>
    </div>
  )
}



export default SignInPage