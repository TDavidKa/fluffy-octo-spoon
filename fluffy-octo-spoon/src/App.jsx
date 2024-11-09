import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pottery from './components/Pottery'
import Kiln from "./components/Kiln"

function App() {
  const [tab, setTab] = useState("pottery");


    
  return (
    <div>
      <div className="site-header">
        <h3 onClick={() => setTab("pottery")}>Pottery</h3>
        <h3 onClick={() => setTab("kiln")}>Kiln</h3>
      </div>
      <div className="site-content">
        <div className={`${tab == 'pottery' ? '' : 'hiddenDiv'}`}>
          <Pottery></Pottery>
        </div>

        <div className={`${tab == 'kiln' ? '' : 'hiddenDiv'}`}>
          <Kiln></Kiln>
        </div>


      </div>
    </div>
  )
}

export default App