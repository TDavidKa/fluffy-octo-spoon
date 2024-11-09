import { useState } from 'react'

import './Kiln.css'

function Kiln() {
  const [tab, setTab] = useState("pottery");


    
  return (
    <div id="kiln-tab">
      <h3>Kiln Tab</h3>
    </div>
  )
}

export default Kiln
