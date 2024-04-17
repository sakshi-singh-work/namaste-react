import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constant";
import "./style.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurant = () => {
    const {restaurantId} =useParams()
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RESTAURANT_MENU+restaurantId);
    const json = await response.json();
    setResData(json?.data);
  };

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
console.log(itemCards,'k')
  return (
    <div>
      <h1>{name}</h1>
      <div class="restaurant-card">
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
                {menu?.card?.info?.price / 100 || menu?.card?.info?.defaultPrice / 100}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
