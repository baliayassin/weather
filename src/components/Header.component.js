import React, { useState } from 'react'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import {AiFillHome,AiFillStar,AiOutlineStar,AiOutlineHome} from 'react-icons/ai'
import './Header.css'
export default function Header() {
    const [favorite,setFavorite] = useState(false);

  return (
    <div>
     <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',border:'10px solid #f9f9f9',boxShadow: '5px 5px 10px #888888'}}>
      <h3 className='title'>Herolo weather</h3>
       <div className='main-favo'>
         {  !favorite ? <AiFillHome style={{cursor:'pointer',marginRight:20}} size={25} onClick={()=>{setFavorite(false)}}/>
            : <AiOutlineHome style={{cursor:'pointer',marginRight:20}} size={25} onClick={()=>{setFavorite(!favorite)}}/>
         }
        {
            favorite ? <AiFillStar style={{cursor:'pointer'}} size={25} onClick={()=>{setFavorite(true)}}/>
            : <AiOutlineStar style={{cursor:'pointer'}} size={25} onClick={()=>{setFavorite(!favorite)}}/>
        }
       </div>
      </div>
    </div>
  )
}
