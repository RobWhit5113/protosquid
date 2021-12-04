import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';
import ebconfig from './ebconfig';
import SignInPage from './comps/SignInPage';

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

  return (
    isUserSignedIn() ?
    <div>
      <p>Welcome to proto squid games</p>
      <button onClick={signOut}>sign out</button>
    </div>
      :
      <SignInPage />
  )
}


export default App;
