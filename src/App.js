import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';
import ebconfig from './ebconfig';
import moment from 'moment';
import SignInPage from './comps/SignInPage';
import PicksPage1 from './comps/PicksPage1';
import 'bootstrap/dist/css/bootstrap.min.css'

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
  const today = moment().date()
  let picsPage = <PicksPage1 />

  // if(today == 7){
  //   picsPage = <PicksPage1/>
  // }else{
  //   picsPage = ''
  // }

  return (
    isUserSignedIn() ?
      picsPage
      :
      <SignInPage />
  )
}


export default App;
