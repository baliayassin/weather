import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {

    const [text,setText] = useState()


  return (
    <div>
     <div style={{ width: 150, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0 auto', marginTop: 30 }}>
       <div style={{ position: 'relative' }}>
        <div>
            <AiOutlineSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} size={25} />
        </div>
            <input
                style={{
                    width: '100%',
                    borderRadius: 5,
                    height: 30,
                    borderWidth: 0,
                    borderColor: 'transparent',
                    boxShadow: '5px 5px 10px #888888',
                    paddingLeft: '40px',
                }}
                onChange={(e)=>{ setText(e.target.value)}}
                placeholder="Search"
            />
       </div>
</div>

    </div>
  )
}
