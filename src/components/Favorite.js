import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {


const {favorites} = useSelector((state => state))
console.log('favorites',favorites)
const data = [{
    day:'Sun',
    temperature: '38 °C'
},
{
    day:'Mon',
    temperature: '38 °C'
},
{
    day:'Tue',
    temperature: '38 °C'
},
{
    day:'Wed',
    temperature: '38 °C'
},
{
    day:'Thu',
    temperature: '38 °C'
}]
  return (
    <div style={{display:'flex'}}>
       {
        data.map((item)=> {
            return (
                <div style={{display:'flex',width:100,height:100,boxShadow: '5px 5px 10px #888888',marginRight:10,borderRadius:10}}>
                <div style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center',margin:'auto'}}>
                    <div> {moment(item.day).format('ddd')}</div>
                    <div>{item.temperature}{`°C`}</div>
                </div>
            </div>
            )
        })
       }

    </div>
  )
}
