import { useState } from 'react'

import './Shop.css'

function Shop() {
  const [tab, setTab] = useState("shop");


    
  return (
    <div id="shop-tab">

      
      
      <div id="shop-tab-left-content" class="tab">

      <div id="kiln-display">
        <h2>Balance: 0</h2>
      </div>
        
      <div className="box">
        <p>This is my item</p>
          <button className="button">Buy me pls</button>
      </div>
        
    </div>
      
      <div id="shop-tab-right-content" class="tab">


      </div>


    </div>
  )
}

export default Shop
