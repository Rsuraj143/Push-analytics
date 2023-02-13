import React from 'react'
import Header from '../Components/Header/Header'
import SlideBar from '../Components/SlideBar/SlideBar'
import Tabs from '../Components/tabs/Tabs'

const Home = () => {
  return (
    <div>
        <SlideBar/>
        <Header>
        <Tabs/>
        </Header>
    </div>
  )
}

export default Home
