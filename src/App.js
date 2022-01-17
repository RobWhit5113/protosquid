import './App.css';
import { Auth, EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useRef } from 'react';
import { Route, Routes } from "react-router-dom";
import ebconfig from './ebconfig';
import SignInPage from './comps/SignInPage';
import PicksPage from './comps/PicksPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './comps/Footer';
import BlockedPage from './comps/BlockedPage';
import Success from './comps/Success'

function App() {
  return (
    <div className="App-container" style={{ display: "flex", justifyContent: "center" }}>
      <EasybaseProvider ebconfig={ebconfig}>
        <Router/>
      </EasybaseProvider>
    </div>
  );
}

function Router() {
  const { isUserSignedIn, signOut } = useEasybase();

  //auto logout code
  const logoutTimerIdRef = useRef(null);

  const myStyle = {
    container: {
      backgroundColor: 'rgba(36,159,156)',
    },
    form: {
      backgroundColor: 'black',
      border: "2px solid #bcb7ce7f",
      borderRadius: 0,
      boxShadow: 'none',
      color: 'rgb(244,71,134)',
      fontFamily: 'Game of Squids',
      width: '90%',
      
    },
    textField: {
      fontSize: 20,
      color: 'rgb(244,71,134)',
      fontFamily: 'Roboto',
      '&:active, &:focus': {
            // boxShadow: 'rgb(244,71,134)',
            color: 'rgb(244,71,134)',
        }
    },
    textFieldLabel: {
        display: "block",
        fontFamily: 'Roboto',
        position: "absolute",
        top: -27,
        left: 0,
        fontSize: 20,
        color: "rgb(244,71,134)",
        '&:active, &:focus': {
            color: 'rgb(244,71,134)',
        }
    },
        submitButton: {
        width: '100%',
        backgroundColor: 'rgb(244,71,134)',
        boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(69 56 255 / 80%) 0px 0px 0px 1px, rgb(60 66 87 / 8%) 0px 2px 5px 0px',
        height: 44,
        transition: 'background-color .24s,box-shadow .24s',
        fontWeight: 500,
        fontSize: 16,
        borderRadius: 4,
        color: 'rgb(36,159,156)',
        '&:focus, &:active': {
            boxShadow: 'rgb(244,71,134)'
        }
    },
    genderSelect: {
        fontWeight: 400,
        fontSize: 16,
        height: 46,
        transition: 'color .24s,background-color .24s,box-shadow .24s',
        boxShadow: 'rgb(244,71,134)',
        padding: '6px 12px',
        borderRadius: 4,
        backgroundColor: 'rgb(244,71,134)',
        color: "#fff",
        '&:active, &:focus': {
            boxShadow: 'rgb(244,71,134)'
        }
    },
    genderSelectLabel:{
      color: 'rgb(244,71,134)'
    },
    forgotPassword: {
      color: 'rgb(244,71,134)'
    },
    secondaryButton: {
      color: 'rgb(36,159,156)'
    },
    headerText:{
      fontSize: 36,
      color: 'rgb(244,71,134)',
    }
    
  }

  useEffect(() => {
    const autoLogout = () => {
      if (document.visibilityState === 'hidden') {
        const timeOutId = window.setTimeout(signOut(), 20 * 60 * 1000);
        logoutTimerIdRef.current = timeOutId;
      } else {
        window.clearTimeout(logoutTimerIdRef.current);
      }
    };

    document.addEventListener('visibilitychange', autoLogout);

    return () => {
      document.removeEventListener('visibilitychange', autoLogout);
    };
  },);

  return (
    <div className='big-container'> 
      {/* <Auth theme="minimal-dark" customStyles={myStyle} dictionary={{
        signInHeader: "ProtoProfit's Squid Game",
      }}> */}
        <Routes>
          {/* <Route path="/login"> */}
            {/* <SignInPage /> */}
          {/* </Route> */}
          {/* <Route path='/signup'> */}
            {/* <SignUpPage /> */}
          {/* </Route> */}
          <Route path='/signout' element={<Success />}>
            {/* <PicksPage /> */}
          </Route>
          <Route path='/closed' element={<BlockedPage />}>
            {/* <BlockedPage /> */}
          </Route> 
          <Route exact path='/' element={<PicksPage />}>
            {/* <Splash /> */}
          </Route>
        </Routes>
      {/* </Auth> */}
      <Footer />
    </div>
  )
}


export default App;
