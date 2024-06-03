import React, { useEffect, useState } from "react";
import "./style.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchResData from "../utils/useFetchResData";

const Restaurant = () => {
  const { restaurantId } = useParams();

  const resData = useFetchResData(restaurantId);

  if (resData === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = resData?.cards[2]?.card?.card?.info;

  const data = resData?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
    (element) =>
      element?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
console.log(data)
  return (
    <div className="text-center">
      <h1 className="text-2xl p-4">{name}</h1>
      <div className="text-lg">
        <h3>
          {avgRating} ({totalRatingsString}){costForTwoMessage}
        </h3>
        <div>{cuisines.join(",")}</div>
        <div>{locality}</div>
      </div>
      
    </div>
  );
};

export default Restaurant;
