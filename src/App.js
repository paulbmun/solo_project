import React, {useState} from "react"
import Header from "./Header"
import Main from "./Main"
import "./styles/style.css"

const App = () => {

  const [player, getPlayer] = useState([{name: '', team: ''}]);

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