import { useState } from 'react'

import './Paint.css'

function Paint() {
  const [tab, setTab] = useState("paint");


    
  return (
    <div id="paint-tab">
      <h3>Paint Tab</h3>
    </div>
  )
}

export default Paint
