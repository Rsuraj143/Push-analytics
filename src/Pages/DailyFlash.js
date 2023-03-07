import React from 'react'
import Header from '../Components/Header/Header'
import SlideBar from '../Components/SlideBar/SlideBar'
import Tabs from '../Components/tabs/Tabs'
import DailyFlashComponent from '../Components/DailyFlashComponent/DailyFlashComponent'

const DailyFlash = () => {
  return (
    <div>
        {/* <SlideBar/> */}
        <Header>
        <DailyFlashComponent/>
        </Header>

    </div>
  )
}

export default DailyFlash