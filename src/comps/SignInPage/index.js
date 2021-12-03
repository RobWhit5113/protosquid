import React, { useState, useEffect } from 'react';
import { useEasybase } from "easybase-react";


function SignInPage() {
  const [userVal, setUserVal] = useState("");
  const [userPas, setUserPas] = useState("Password1")
  
  const {signIn} = useEasybase()
  const clearInputs = () => {
    setUserVal("");
  }

  const handleSignInPress = async () => {
    await signIn(userVal, userPas);
    clearInputs();
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>proto squid games</h1>
      <input value={userVal} onChange={e => setUserVal(e.target.value)}  placeholder="email" />
      <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <button title="Sign In" onClick={handleSignInPress} style={{width: '50%'}}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: "75%",
    margin: 10,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 30
  }
};

export default SignInPage