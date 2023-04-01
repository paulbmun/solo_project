import React from "react"
import playerData from "./playerData"
import {useState} from 'react'
import PlayerImage from './PlayerImage'


const PlayerCard = ({player, getPlayer}) => {
  // console.log('PlayerCard', playerData)

  const [data, getData] = useState({
    name: '',
    team: '',
  })

  const formSubmit = (event) => {
    event.preventDefault();
    getPlayer(()=> {
      const list = [data];
      return list;
    })
    getData({
      name: '',
      team: '',
    })
  }

  return (
    <>
      <form className="playerinputs" onSubmit={formSubmit}>
        <div className="formgroup">
          <input 
          type="text" 
          id = "name"
          value={data.name}
          onChange ={(event) => getData({...data, name: event.target.value})}
          placeholder="Name"
          required
          />
          <input 
          type="text" 
          id= "team"
          value={data.team}
          onChange={(event) => getData({...data, team: event.target.value})}
          placeholder="Team"
          required
          />
        </div>
        <button type="submit">Submit</button>
      </form> 
    </>
  )
}

export default PlayerCard