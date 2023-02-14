import React from "react";
import mer from "../../Images/mer.svg";
import aov from "../../Images/card_aov.svg";
import sale from "../../Images/card_sale.svg";
import rate from "../../Images/card_rate.svg";
import session from "../../Images/card_session.svg";
import order from "../../Images/card_order.svg";

const TabBox = () => {
  const data = [
    {
      image: mer,
      heading: "MER(ROAS)",
      current_date: "Sept 14th",
      current_value: "5.5",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: sale,
      heading: "SALES",
      current_date: "Sept 14th",
      current_value: "7000",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: order,
      heading: "ORDERS",
      current_date: "Sept 14th",
      current_value: "700",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: aov,
      heading: "AOV",
      current_date: "Sept 14th",
      current_value: "100",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: session,
      heading: "SESSIONS",
      current_date: "Sept 14th",
      current_value: "700",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: rate,
      heading: "CONV RATE",
      current_date: "Sept 14th",
      current_value: "10%",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
    {
      image: sale,
      heading: "SPEND",
      current_date: "Sept 14th",
      current_value: "7000",
      current_percentage: "-10%",
      previous_value: "Sept 13th",
      previous_percentage: "-10%",
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <div className="item">
          <div className="heading1">
            <img src={item.image} alt="mer" />
            <h4>{item.heading}</h4>
          </div>
          <div className="heading2">
            <h4>{item.current_date}</h4>
          </div>
          <div className="heading3">
            <p>{item.current_value}</p>
            <span>({item.current_percentage})</span>
          </div>
          <div className="heading2 heading4">
            <h4>{item.previous_value}</h4>
          </div>
          <div className="heading5">
            <h4>{item.previous_percentage}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabBox;
