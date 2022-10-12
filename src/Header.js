import React from 'react'
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

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

        </div>
        
        
        </div>
  )
}

export default Header