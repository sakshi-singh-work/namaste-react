import React, { useEffect, useState } from "react";
import "./style.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchResData from "../utils/useFetchResData";

const Restaurant = () => {
  const { restaurantId } = useParams();

  const resData = useFetchResData(restaurantId);
  console.log(resData);
  if (resData === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <div className="p-4 m-4  ">
        <h3>
          {avgRating} ({totalRatingsString}){costForTwoMessage}
        </h3>
        <div>{cuisines.join(",")}</div>
        <div>{locality}</div>
        <h3>Menu</h3>
        <div>
          {itemCards?.map((menu) => {
            return (
              <div key={menu?.card?.info?.id}>
                {menu?.card?.info?.name} - Rs.{" "}
                {menu?.card?.info?.price / 100 ||
                  menu?.card?.info?.defaultPrice / 100}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
