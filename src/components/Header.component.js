import React from 'react'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import {AiFillHome,AiFillStar} from 'react-icons/ai'
import './Header.css'
export default function Header() {
  return (
    <div>
     <div style={{display:'flex'}}>
      <div className='title'>Herolo weather</div>
       <div className='main-favo'>
        <AiFillHome style={{cursor:'pointer'}} size={25} onClick={()=>{console.log('home')}}/>
        <AiFillStar style={{cursor:'pointer'}} size={25} onClick={()=>{console.log('favorite')}}/>
       </div>
      </div>
    </div>
  )
}
