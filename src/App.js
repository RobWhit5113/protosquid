import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useRef } from 'react';
import ebconfig from './ebconfig';
import moment from 'moment';
import SignInPage from './comps/SignInPage';
import PicksPage from './comps/PicksPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './comps/Footer';

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
      isUserSignedIn() ?
        <div className='big-container'> 
          <PicksPage />
          <Footer />
        </div>
        :
        <div className='big-container'>
          <SignInPage />
          <Footer />
        </div>
  
  )
}


export default App;
