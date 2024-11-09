import { useState, useEffect, React } from 'react'

import './Pottery.css'

function Pottery(props) {
  const [tab, setTab] = useState("pottery");
  const [backgroundImage, setBackgroundImage] = useState("/back.png");
  const [paths, setPaths] = useState([])

  let [grid, setGrid] = useState(new Array(10).fill(0).map(() => new Array(10).fill(0)));
  let [gridSize, setGridSize] = useState(20);
  let [sliderValue, setSliderValue] = useState(10);

  let [showExport, setShowExport] = useState(false);
  let [exportValue, setExportValue] = useState("");

  function generateNewGrid(size){
    setGridSize(size);
    let newGrid = new Array(size).fill(0).map(() => new Array(size).fill(1));

    setGrid(newGrid);
  }

  function flipValue(e){
    if (e.buttons == 1){
        let [y, x] = e.target.className.split(" ")[0].split(",");
        
        let copy = [...grid];

        copy[y][x] = 0;
        copy[y][gridSize - x - 1] = 0;

        setGrid(copy);
    }
    
}

  useEffect(() => {
    generateNewGrid(gridSize)
  }, [])
    
  return (
    <div id="pottery-tab">
      <div id="pottery-tab-left-content" className="tab">


      {grid.map((row, index) => 
                
                ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                    <div onMouseOver={flipValue} onMouseDown={flipValue}  key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? "filled" : ""}`} style={{width: (40 / gridSize) + "vw", height: (40 / gridSize) + "vw"}}> </div>
                )} </div> )
            )}

    </div>
      
      <div id="pottery-tab-right-content" class="tab">
           <h3 className="button-30" id="pottery-to-kiln-button" onClick={() => generateNewGrid(gridSize)}>Reset Pottery</h3>
            <h3 className="button-30" id="pottery-to-kiln-button" onClick={() => props.savePot(grid) && generateNewGrid(gridSize)}>Move to Kiln</h3>

      </div>


    </div>
  )
}

export default Pottery
