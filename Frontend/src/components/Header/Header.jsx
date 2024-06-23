import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite Food Here </h2>
            <p>Choose form a diverse menu featuring a delectable array of dishes crafted with the finest ingredient and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='view-more'>View Menu</button>
        </div>
        <div className="plate">
            <div className="food">
                <img src="/food_rotate.png" alt="Header food image" />  
            </div>
        </div>
    </div>
  )
}

export default Header
