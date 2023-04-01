import React from 'react'
import playerData from './playerData'

const PlayerImage = ({player, getPlayer}) => {

  const playerExists = () => {
    const foundPlayer = playerData.find(
      el => `${el.first_name} ${el.last_name}` === player[0].name && el.team === player[0].team
    )
    if (foundPlayer) {
      return (
        <img src={foundPlayer.url} />
      )
    }
  }

  return (
    <>
      <div>
        <h1 className="user--list">All-NBA Starting 5 List</h1>
        {playerExists()}
      </div>
    </>
  )
}

export default PlayerImage