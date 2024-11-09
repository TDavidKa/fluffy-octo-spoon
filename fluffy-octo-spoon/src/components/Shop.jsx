import { useState } from 'react'

import './Shop.css'

function Shop(props) {
  const [tab, setTab] = useState("shop");

  let [gridSize, setGridSize] = useState(20);
    
  return (
    <div id="shop-tab">

      
      
      <div id="shop-tab-left-content" class="tab">


      {props.storedPots.map((pot, index) => {
        return (
          <div className="box">
                {pot.map((row, index) => 
        
                        ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                            <div   key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? "firedFilled" : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                        )} </div> )
                    )}
     
          </div>
        )
      })}

        
    </div>
      
    

    </div>
  )
}

export default Shop
