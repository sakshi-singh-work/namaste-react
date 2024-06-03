import React from "react";
import "../../index.css";

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
    <div className="border solid grey rounded-lg shadow w-80 h-96 pl-8 pt-6 bg-gray-100  hover:bg-gray-300">
      <img
        className="h-64 w-64 rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="text-lg">{name}</h3>
      <div>
        {avgRating} ⭐️ {sla?.slaString}
      </div>
      <div>{costForTwo}</div>
      <div>{locality}</div>
    </div>
  );
};

export default CardContainer;
