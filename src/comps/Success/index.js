import {Button} from 'react-bootstrap'
import { useEasybase } from "easybase-react";

function Success(){

  //easybase imports
  const {signOut} = useEasybase()
    //signout
  const handleSignOut = () => {
    signOut()
  }

  return(
  <div className='page-container'>
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
  </div>
  )
}

export default Success