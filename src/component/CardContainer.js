import React from 'react'
import "../../index.css"


const CardContainer = (props) => {
  const { data } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    locality,
    costForTwo,
    cuisines,
  } = data?.info;

  
  return (
    <div className="cardWrapper">
      <img
        className="imgContainer"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="restaurantName">{name}</h3>
      <div>
        {avgRating} {sla?.slaString}
      </div>
      <div>{costForTwo}</div>
      <div className="restaurantAddress">{locality}</div>
    </div>
  );
};

export default CardContainer;
