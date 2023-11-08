import React from 'react'
import Header from './Header.component'
import Search from './Search'
import Weather from './Weather'

export default function Home() {
  return (
    <div>
        <Header/>
        <Search/>
        <Weather/>
    </div>
  )
}
