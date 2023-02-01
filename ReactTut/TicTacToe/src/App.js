import React from "react"
import parse from 'html-react-parser'


export default function Board() {
  const parse = require('html-react-parser')
  const buildSquares = (rowMultiplier) => {
    for (let t = 1; t <= 3; t++) {
      parse("<button className='square'>{t*rowMultiplier}</button>")
      // <button className="square">{t * rowMultiplier}</button>
    }
  }
  const makeBoard = () => {
    for (let i = 0; i < 3; i++) {
      parse("<div className='board-row'>")
      {
        buildSquares(i + 1)
      }
      parse("</div>")
    }
  }
  return (
    <main>
      {makeBoard()}
    </main>
  )
}
