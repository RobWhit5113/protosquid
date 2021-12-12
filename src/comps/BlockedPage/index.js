import { Button } from "react-bootstrap";
import { useEasybase } from "easybase-react";


function BlockedPage () {
  
  const {signOut} = useEasybase()

  const handleSignOut = () => {
    signOut()
  }

  return(
      <div className='blocker-container'>
        <div className='message-container'>
          <h2>The Window Is Closed</h2>
        </div>
        <div className='signout-request-container'>
          <h3>Please signout</h3>
        </div>
        <div className='signout-button-container'>
          <Button variant='primary' id='button' onClick={handleSignOut} size='lg'>Sign Out </Button>
        </div>
      </div>
    
  )
}

export default BlockedPage