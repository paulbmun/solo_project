import React from "react"

const Header = (props) => {
  return (
    <header className="header">
      <img 
        src="./images/logo-color.png" 
        className="header--image"
      />
      <div className="dropdown">
        <button className="dropdown-btn">All-NBA Starting 5</button>
        <div className="dropdown-content">
          <a href="#">Dirtiest Starting 5</a>
          <a href="#">Top Shooters Starting 5</a>
          <a href="#">NBA All-Defensive Starting 5</a>
        </div>
      </div>
    </header>
  )
}

export default Header