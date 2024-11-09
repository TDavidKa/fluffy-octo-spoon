import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pottery from './components/Pottery'
import Kiln from "./components/Kiln"
import Paint from "./components/Paint"
import Shop from "./components/Shop"

function App() {
  const [tab, setTab] = useState("pottery");
  const [kilnPot, setKilnPot] = useState([]);
  const [fired, setFired] = useState(false);
  const [storedPots, setStoredPots] = useState([]);

  function savePot(pot){
    setKilnPot(pot);
    setFired(false)

    return true;
  }

  function storePot(){
    setStoredPots((oldPots) => [...oldPots, kilnPot]);
    setKilnPot([]);
  }

  
    
  return (
    <div>
      <div className="site-header">
        <img id="title" src="https://i.imgur.com/3edKbwC.png"></img>
        {/* <h3 id = "title">Pot-Pourri</h3> */}
        <h3 className="button-30" onClick={() => setTab("pottery")}>Pottery</h3>
        <h3 className="button-30" onClick={() => setTab("kiln")}>Kiln</h3>
        <h3 className="button-30" onClick={() => setTab("shop")}>Display</h3>
      </div>
      <div className="site-content">
        <div className={`${tab == 'pottery' ? '' : 'hiddenDiv'}`}>
          <Pottery savePot={savePot} ></Pottery>
        </div>

        <div className={`${tab == 'kiln' ? '' : 'hiddenDiv'}`}>
          <Kiln storePot={storePot} fired={fired} setFired={setFired} kilnPot={kilnPot}></Kiln>
        </div>

        <div className={`${tab == 'paint' ? '' : 'hiddenDiv'}`}>
          <Paint></Paint>
        </div>

        <div className={`${tab == 'shop' ? '' : 'hiddenDiv'}`}>
          <Shop storedPots={storedPots}></Shop>
        </div>


      </div>
    </div>
  )
}

export default App
