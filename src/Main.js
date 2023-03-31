import React from "react"
import PlayerCard from "./PlayerCard"
import PlayerImage from './PlayerImage'


const Main = ({player, getPlayer}) => {
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