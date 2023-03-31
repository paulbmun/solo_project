import React from "react"
import playerData from "./playerData"
import {useState} from 'react'
import PlayerImage from './PlayerImage'


const PlayerCard = ({player, getPlayer}) => {
  console.log('PlayerCard', playerData)

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

    // getPlayer(()=>{
    //   const list = [data];
    //   console.log(list)
    //   return list;
    // })
    // confirm that the name & team inserted is in playerData
    // generate the image associated with the player name from images folder
    // create a div inside the playerlist div
      // set a condition to ensure that user cannot add more than 5 players to their list
    // getPlayer([])
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