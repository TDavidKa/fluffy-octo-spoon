import { useState } from 'react'

import './Kiln.css'

function Kiln() {
  const [tab, setTab] = useState("pottery");


  function fireKiln(){
    props.setFired(true);
  }
    
  return (
    <div id="kiln-tab">
<<<<<<< Updated upstream
      <h3>Kiln Tab</h3>
=======
 

      <div id="kiln-display">

     
        {props.kilnPot.map((row, index) => 
                  
                  ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                      <div   key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? (props.fired ? "firedFilled" : "filled") : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                  )} </div> )
              )}

      </div>

      <div id="kiln-functionality">
        <h3 onClick={() => fireKiln()}>Fire Pottery</h3>
        <h3> Bring to Store </h3>
      </div>

          
    
>>>>>>> Stashed changes
    </div>
  )
}

export default Kiln
