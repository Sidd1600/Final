import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero-home'>
      <h1 style={{marginTop:"50px", marginLeft:"80px",paddingTop:"25px"}}>
        IIT INDORE<br/>NIGHT CANTEEN
      </h1>
      <p style={{marginLeft:"80px"}}>
      At the Night Canteen, our mission is to offer a wide variety of scrumptious food items from our menu, tailored to suit the tastes and preferences of the diverse IIT Indore community. We are committed to delivering top-quality, hygienic, and wholesome meals to keep you energized and focused, whether you're burning the midnight oil before an exam or simply hanging out with friends after hours.
      </p>
      <img className='hero-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbh6Bu1EncJmpeFof8if_S3KsKFHXWmXxsa7BRT8E4e4FsCEi3bz5WPog8_YbwHaW7I0&usqp=CAU" alt="night-canteen" />
    </div>
  )
}
