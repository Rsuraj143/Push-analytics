import React from 'react'
import Header from '../Components/Header/Header'
import SlideBar from '../Components/SlideBar/SlideBar'
import Settingtab from '../Components/Setting/Settingtab'

const Setting = () => {
  return (
    <div>
      <SlideBar/>
      <Header>
        <Settingtab/>
      </Header>
    </div>
  )
}

export default Setting
