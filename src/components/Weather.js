import React, { useEffect, useState } from 'react'
import {FaRectangleXmark} from 'react-icons/fa6'
import {AiOutlineHeart} from 'react-icons/ai'
import axios from 'axios'
import moment from 'moment';

// import { LOCATION_KEY , API_KEY} from '../consts'
const API_KEY= 'G6LW66BAOJIVf02GqGquckYRRkGkSMGn'
const LOCATION_KEY= '215854'
const dataObject = [
    {
        "Date": "2023-11-07T07:00:00+02:00",
        "EpochDate": 1699333200,
        "Temperature": {
            "Minimum": {
                "Value": 20.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 27.7,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    {
        "Date": "2023-11-08T07:00:00+02:00",
        "EpochDate": 1699419600,
        "Temperature": {
            "Minimum": {
                "Value": 20.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 27.5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    },
    {
        "Date": "2023-11-09T07:00:00+02:00",
        "EpochDate": 1699506000,
        "Temperature": {
            "Minimum": {
                "Value": 20.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 27,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    },
    {
        "Date": "2023-11-10T07:00:00+02:00",
        "EpochDate": 1699592400,
        "Temperature": {
            "Minimum": {
                "Value": 20,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 26.8,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    },
    {
        "Date": "2023-11-11T07:00:00+02:00",
        "EpochDate": 1699678800,
        "Temperature": {
            "Minimum": {
                "Value": 20.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 28.6,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    }
]
export default function Weather() {
const [telAvivFiveDaysForecast,setTelAvivFiveDaysForecast] = useState();

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


const fetchData = async ()=>{

    const fiveDays = await axios.get
    (`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${LOCATION_KEY}?apikey=${API_KEY}&metric=true`)

    // const telAviv = await  axios.get
    // (`    http://dataservice.accuweather.com/locations/v1/cities/search?apikey=G6LW66BAOJIVf02GqGquckYRRkGkSMGn&q=tel aviv
    // `)
    setTelAvivFiveDaysForecast(fiveDays.data.DailyForecasts)

}

useEffect(()=>{

//http://dataservice.accuweather.com/forecasts/v1/daily/5day/${LOCATION_KEY}?apikey=${API_KEY}&metric=true
  
// fetchData()
console.log('5 days', dataObject )

},[])

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div style={{width:'70%',height:450,margin:'0 auto',marginTop:'5%',boxShadow: '5px 5px 10px #888888'}}>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',width:150,height:50,marginTop:30,marginLeft:70}}>
            <FaRectangleXmark size={50} />
                <div style={{display:'flex',flexDirection:'column',marginLeft:15,justifyContent:'flex-start'}}>
                    <div>Tel Aviv</div>
                    <div style={{marginTop:10}}>33 C°</div>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',width:'27%',height:50,marginTop:30}}>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <AiOutlineHeart size={50} style={{cursor:'pointer'}} onClick={()=>{console.log('click heart')}}/>
                    <button onClick={()=>{console.log('click favorite')}} style={{fontSize:20,border: 'none', color: 'black', padding: 10, borderRadius: 10,marginLeft:20,cursor: 'pointer',boxShadow: '5px 5px 10px #888888',borderColor: 'transparent',backgroundColor:'transparent'}}>Add to Favorite</button>
                </div>
            </div>
        </div>
            <h2 style={{marginTop:'10%'}}>Scattered clouds</h2>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:50}}>
                {
                    dataObject.map((item) => {return (
                        <div style={{display:'flex',width:100,height:100,boxShadow: '5px 5px 10px #888888',marginRight:10,borderRadius:10}}>
                            <div style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center',margin:'auto'}}>
                                <div> {moment(item.Date).format('ddd')}</div>
                                <div>{item.Temperature.Maximum.Value}{`°${item.Temperature.Maximum.Unit}`}</div>
                            </div>
                        </div>
                    )})
                }
            </div>
      </div>
    </div>
  )
}
