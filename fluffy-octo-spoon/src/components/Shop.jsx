import { useState } from 'react'

import './Shop.css'

function Shop(props) {
  const [tab, setTab] = useState("shop");

  let [gridSize, setGridSize] = useState(20);
    
  return (
    <div id="shop-tab">

      
      
      <div id="shop-tab-left-content" class="tab">
        
      <div className="box">
        <h2>Balance: 0</h2>
        
        <p>This is my item</p>
          <button className="button">Buy me pls</button>
      </div>

      {props.storedPots.map((pot, index) => {
        return (
          <div className="box">
                {pot.map((row, index) => 
        
                        ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                            <div   key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? "firedFilled" : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                        )} </div> )
                    )}
              <button className="button">Buy me pls</button>
          </div>
        )
      })}

        
    </div>
      
      <div id="shop-tab-right-content" class="tab">


      </div>


    </div>
  )
}

export default Shop
