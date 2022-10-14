import React from 'react'
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch} from 'react-redux';
import { logout } from './features/counter/userSlice';
import { signOut } from "firebase/auth"
import {auth} from './firebase'




const Header = () => {
/**
 * const dispatch= useDispatch()

//2
const logoutOfApp = ()=>{
  dispatch(logout())
  signOut(auth)
  

}
 */
//2

const dispatch =useDispatch()
const logoutOfApp=()=>{
  dispatch(logout())
  signOut(auth)
}


  return (
    <div className='header'>
        <div className='header_left'>
            <img src='rimage/1.png' alt=''/>
            <div className='header_search'>
                {/**search icon */}
                <ZoomOutIcon/>
               <input placeholder='search' type='text'></input>
            </div>

        </div>
        
        <div className='header_right'>
          <HeaderOption Icon= {HomeIcon} title='Home' />
          <HeaderOption Icon= {SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon= {BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon= {ChatBubbleOutlineIcon} title='Messaging' />
          <HeaderOption Icon= {NotificationsIcon} title='Notifications'/>
          <HeaderOption  avatar={true} onClick={logoutOfApp} title='me'/>
        </div>
        
        
        </div>
  )
}

export default Header