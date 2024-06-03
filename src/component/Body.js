import React, { useState, useEffect } from "react";
import "../../index.css";
import CardContainer from "./CardContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantPromoted from "./hoc/RestaurantPromoted";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5574028&lng=73.92830049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response?.json();
    setResData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const Promoted = RestaurantPromoted(CardContainer);

  useEffect(() => {
    fetchData();
  }, []);

  const handleTopRated = () => {
    setResData(resData?.filter((element) => element.info.avgRating > 4));
  };

  if (resData?.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="flex gap-4 p-4 mx-20 ">
        <div>
          <label className="text-orange-400 text-3xl">
            What's on your mind?
          </label>
        </div>
        <div className="bg-white pr-2 rounded-2xl">
          <input
            className="h-12 w-80 p-4 rounded-lg outline-none"
            type="text"
            placeholder="Search restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span onClick={() => setSearchText("")} className=" cursor-pointer">
            ╳
          </span>
        </div>
        <button
          onClick={() => {
            const searchData = resData.filter((element) => {
              return element.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredData(searchData);
          }}
          className="bg-green-300 px-4 rounded-lg"
        >
          Search 🔎
        </button>
        <button
          className="bg-blue-300 px-4 rounded-lg"
          onClick={handleTopRated}
        >
          Top Rated ⭐️
        </button>
      </div>
      <div className="flex gap-24 flex-wrap p-4 ml-20 ">
        {filteredData?.map((resData) => {
          return (
            <Link
              to={"restaurant/" + resData?.info?.id}
              key={resData?.info?.id}
            >
              {resData?.info?.isOpen ? (
                <Promoted data={resData} />
              ) : (
                <CardContainer data={resData} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
