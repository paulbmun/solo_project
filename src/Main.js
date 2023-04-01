import React, {useState} from "react"
import PlayerCard from "./PlayerCard"
import PlayerImage from './PlayerImage'

const Main = ({player, getPlayer}) => {
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const addPlayer = (player) => {
    setSelectedPlayers([...selectedPlayers, player])
  }

  return (
    <main>
      <PlayerCard 
        player={player}
        getPlayer={getPlayer}
      />
      <PlayerImage player={player} getPlayer={getPlayer}/>

    </main>
  )
}

export default Main