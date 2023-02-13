import React from 'react'


const TabBox = ({data}) => {
    // const {image,heading ,current_date,current_value,current_percentage,previous_value,previous_percentage} =data
  return (
    <div className="item">
        <div className="heading1">
          <img src={data.image} alt="mer" />
          <h4>{data.heading}</h4>
        </div>
        <div className="heading2">
          <h4>{data.current_date}</h4>
        </div>
        <div className="heading3">
          <p>{data.current_value}</p><span>({data.current_percentage})</span>
        </div>
        <div className="heading2 heading4">
          <h4>{data.previous_value}</h4>
        </div>
        <div className="heading5">
          <h4>{data.previous_percentage}</h4>
        </div>
      </div>
  )
}

export default TabBox
