import React from 'react'
import "./Live_view.css"
import TabBox from '../tabs/TabBox'
import Chart1 from '../Charts/Chart1'

const Live_view = () => {
  return (
    <div>
      <div className='main-heading'>
          <h1>Live view</h1> 
      </div>
      <div className="tab-box">
       <div className="scroll-left">
           <TabBox />
       </div>
      </div>
      <div className="chart-main">
        <Chart1/>
      </div>

    </div>
  )
}

export default Live_view
