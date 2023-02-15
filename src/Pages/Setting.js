import React from 'react'
import Header from '../Components/Header/Header'
import Settingtab from '../Components/Setting/Settingtab'
import SlideBar from '../Components/SlideBar/SlideBar'


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
