// import React from 'react'
import "./TaTeTi.css"
import circle from "../assets/circle.png"
import cross from "../assets/cross.png"

const TaTeTi = () => {
  return (
    <div className="container">
        <h1 className="title">Ta Te Ti Game in</h1>
        <h1 className="board"></h1>
        <button className="reset">Reset</button>
        <img src={circle}/>
        <img src={cross}/>
    </div>
  )
}

export default TaTeTi;
