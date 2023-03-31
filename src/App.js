import React from "react"
import Header from "./Header"
import Main from "./Main"
import {useState} from 'react'

const App = (props) => {

  const [player, getPlayer] = useState([]);

  return (
    <div>
      <Header />
      <Main 
        player={player} 
        getPlayer={getPlayer}
      />
    </div>
  )
}

export default App