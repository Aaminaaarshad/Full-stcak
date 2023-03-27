import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8rr3kUGRraPCB9AQbuW8VKsP718yZbo15A&usqp=CAU" alt="" />
      </div>
      <div className="header_right">
        <a href="/">Home</a>
      </div>
    </div>
  )
}

export default Header