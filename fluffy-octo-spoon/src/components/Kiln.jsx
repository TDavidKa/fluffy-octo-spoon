import { useState } from 'react'

import './Kiln.css'

function Kiln(props) {
  const [tab, setTab] = useState("pottery");
  let [gridSize, setGridSize] = useState(20);


    
  return (
    <div id="kiln-tab">
 


      {props.kilnPot.map((row, index) => 
                
                ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                    <div   key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? "filled" : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                )} </div> )
            )}

    
    </div>
  )
}

export default Kiln
