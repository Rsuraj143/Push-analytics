import React from 'react'
import SlideBar from '../Components/SlideBar/SlideBar'
import Header from '../Components/Header/Header'
import Live_view from '../Components/LiveView/Live_view'

const LiveView = () => {
  return (
    <div>
      <SlideBar/>
      <Header>
        <Live_view/>
      </Header>
    </div>
  )
}

export default LiveView
