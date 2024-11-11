import React from 'react'
import "./RighSideBar.css"

const RighSideBar = () => {
  return (
    <div className='rs'>
        <div className="rs-profile">
            <img src={assets.profile_img} alt="" />
            <h3>Richard Sanford <img src={assets.green_dot} className='dot' alt="" /></h3>
            <p>Hey, There I am Richard Sanford using chat app</p>
        </div>
        <hr />
        <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic4} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
            </div>
        </div>
        <button>Logout</button>
      
    </div>
  )
}
import "./RighSideBar.css"
import assets from '../../assets/assets'

export default RighSideBar
