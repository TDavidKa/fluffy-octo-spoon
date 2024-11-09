import { useState, useEffect, React } from 'react'

import './Pottery.css'

function Pottery() {
  const [tab, setTab] = useState("pottery");
  const [backgroundImage, setBackgroundImage] = useState("https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0=");
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
        //copy[y][x] = 1 - copy[y][x]
        setGrid(copy);
    }
    
}

  useEffect(() => {
    generateNewGrid(10)
  }, [])
    
  return (
    <div id="pottery-tab">
      <div id="pottery-tab-left-content" class="tab">


      {grid.map((row, index) => 
                
                ( <div className="row" key={"r" + index}>{row.map((tile, index2) => 
                    <div onMouseOver={flipValue} onMouseDown={flipValue}  key={"r" + index + "c" + index2} className={`${index + "," + index2} gridTile ${tile == 1 ? "filled" : ""}`} style={{width: (30 / gridSize) + "vw", height: (30 / gridSize) + "vw"}}> </div>
                )} </div> )
            )}

    </div>
      
      <div id="pottery-tab-right-content" class="tab">


      </div>


    </div>
  )
}

export default Pottery
