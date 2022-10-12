import { Avatar } from '@mui/material'
import React from 'react'
import './Siedbar.css'

const Siedbar = () => {
  return (
    <div className='siedbar'>
        <div className='siedbar_top'>
            <img src='rimage/3.jpg' alt=''/>
            <Avatar className='siedbar_avatar'/>
            <h2>aaaaaa</h2>
            <h4>eeeeeeee</h4>
        </div>
        
        <div className='siedbar_stats'>
            <div className='siedbar_stat'>
                <p>who viewed</p>
                <p className='siedbar_statNumber'>2,54</p>
            </div>
            <div className='siedbar_stat'>
            <p>views on post</p>
                <p className='siedbar_statNumber'>2,54</p>
            </div>
        </div>
        <div className='siedbar_bottom'>
            <p>recent</p>
        </div>
        </div>
  )
}

export default Siedbar