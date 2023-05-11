import React from 'react'
import videoBG from '../video/bash_video.mp4'

const Main = () => {
  return (
    <div className='main'>
        <video src={videoBG} autoPlay loop muted/>
        <div className='navbar'>
          <nav>
            <p className='left_nav'><a href="/">BASIC/DEPT<span className='chotu'>&#174;</span></a></p>
            <ul className='nav_mid'>
              <li className='nav_mid_item'><a href="/">WORK</a></li>
              <li className='nav_mid_item'><a href="/">ABOUT</a></li>
              <li className='nav_mid_item'><a href="/">NEWS</a></li>
              <li className='nav_mid_item'><a href="/">THNKING</a></li>
              <li className='nav_mid_item'><a href="/">CAREERS</a></li>
              <li className='nav_mid_item'><a href="/">CONTACT</a></li>
            </ul>
            <p className='right_nav'>&#9898;&#9898;&#9898;</p>
          </nav>
        </div>
        <div className='content'>
          <div className='watch_reel' style={{backgroundColor:"white" ,borderRadius:"2000px",padding:"30px 22px",fontSize:"0.8rem"}}>
          <h1 style={{color:"black"}}>Watch</h1>
          <h2 style={{color:"black"}}>Reel</h2>
          </div>
          <div className='basic_depth' style={{marginTop:"10px"}}>
            <p>BASIC/DEPT&#174;</p>
            <p>2010-&#9900;&#9900;</p>
          </div>
        </div>
    </div>
  )
}

export default Main