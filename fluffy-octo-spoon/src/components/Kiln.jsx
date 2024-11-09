import { useState } from 'react'

import './Kiln.css'

function Kiln(props) {
  const [tab, setTab] = useState("pottery");
  let [gridSize, setGridSize] = useState(20);

  function fireKiln(){
    props.setFired(true);
  }


    
  return (
    <div id="kiln-tab">
  

          <div id="kiln-display">
    
    
            {props.kilnPot.map((row, index) => 
    
                      ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                          <div   key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? (props.fired ? "firedFilled" : "filled") : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                      )} </div> )
                  )}
    
          </div>
    
          <div id="kiln-functionality">
              <h3 className="button-30" onClick={() => fireKiln()}>Fire Pottery</h3>
              <h3 className="button-30"  onClick={() => props.storePot()}> Bring to Display </h3>
          </div>
    
    
    
    </div>
  )
}

export default Kiln
