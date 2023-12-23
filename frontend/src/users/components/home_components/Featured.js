import React from 'react'
import '../menu_page_components/Itemcard'
import Itemcard from '../menu_page_components/FoodCard'
import FoodCard from '../menu_page_components/FoodCard'
import '../menu_page_components/Itemcard.css'
import './featured.css'
export default function Featured() {
  return (
    <div className='featured'>
        <div className="item-card">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95-IMZwCUaUFRaENKc7sinAX-YJG5sNPhMw&usqp=CAU"alt="item" />
            <div className="bottom-part" >
                <p className="food-name">Tea</p>
                <div className="price-tag">
                    <p className="price">₹10</p>
                    {/* <button  onClick={()=>handleClick(item)}>
                        <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 8.5V25.5" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                            <path d="M25.5 17L8.5 17" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
        <div className="item-card">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95-IMZwCUaUFRaENKc7sinAX-YJG5sNPhMw&usqp=CAU"alt="item" />
            <div className="bottom-part" >
                <p className="food-name">PBM</p>
                <div className="price-tag">
                    <p className="price">₹100</p>
                    {/* <button  onClick={()=>handleClick(item)}>
                        <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 8.5V25.5" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                            <path d="M25.5 17L8.5 17" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
        <div className="item-card">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95-IMZwCUaUFRaENKc7sinAX-YJG5sNPhMw&usqp=CAU"alt="item" />
            <div className="bottom-part" >
                <p className="food-name">Cold Coffee</p>
                <div className="price-tag">
                    <p className="price">₹40</p>
                    {/* <button  onClick={()=>handleClick(item)}>
                        <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 8.5V25.5" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                            <path d="M25.5 17L8.5 17" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                    </button> */}
                </div>
              </div>
        </div>
    </div>
  )
}
