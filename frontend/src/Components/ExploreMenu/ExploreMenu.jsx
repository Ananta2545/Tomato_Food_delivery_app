import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>
        Embark on a culinary journey with our tantalizing menu, where each dish is a masterpiece crafted to delight your senses. From comforting classics to innovative creations, experience a symphony of flavors that will leave you craving more.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev === item.menu_name? 'all': item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item.menu_name? "active": ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu