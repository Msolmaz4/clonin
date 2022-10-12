import React from 'react'
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='rimage/1.png' alt=''/>
            <div className='header_search'>
                {/**search icon */}
                <ZoomOutIcon/>
               <input type='text'></input>
            </div>

        </div>
        
        <div className='header_right'>
          <HeaderOption Icon= {HomeIcon} title='Home' />
          <HeaderOption Icon= {SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon= {BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon= {ChatBubbleOutlineIcon} title='Messaging' />
          <HeaderOption Icon= {NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar ='rimage/2.jpg' title='me' />
        </div>
        
        
        </div>
  )
}

export default Header