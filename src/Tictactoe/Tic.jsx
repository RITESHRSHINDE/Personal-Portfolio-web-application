import React from 'react'


function Tic() {
  return (
    <div>
      <h1>TIC TAC TOE</h1> <br/> <br/>
        <div class="container"> 
          <div class="game">
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
          </div>
       </div> 
       <button id="btn">Reset Game</button>
    </div>
  )
}

export default Tic
