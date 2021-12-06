import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';
import ebconfig from './ebconfig';
import SignInPage from './comps/SignInPage';
import PicksPage from './comps/PicksPage';

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
  const { isUserSignedIn} = useEasybase();

  return (
    isUserSignedIn() ?
      <PicksPage />
      :
      <SignInPage />
  )
}


export default App;
