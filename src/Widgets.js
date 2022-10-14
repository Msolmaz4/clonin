import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

     const newsArticle = (heading,subtitle) =>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
                 </div>  
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p> {subtitle} </p>
                 </div>  

        </div>

     )


  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkendIn News</h2>
            <InfoIcon/>
        </div>
        
        {newsArticle('Bitcoin Breaks $22','Crypto - 8086 ')}
        {newsArticle('Corona Virus ','Top news - 886 ')}
        {newsArticle('Tesla hits new highs ','Car && auto -300 ')}
        {newsArticle('Is Redux too good ','Tops news - 6503')}
        
        </div>
  )
}

export default Widgets