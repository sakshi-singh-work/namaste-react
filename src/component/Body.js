import React, { useState, useEffect } from "react";
import "../../index.css";
import CardContainer from "./CardContainer";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const[filteredData,setFilteredData] =useState([])

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5574028&lng=73.92830049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    setResData(
      data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredData(
      data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
console.log(resData)
  useEffect(() => {
    fetchData();
  }, []);

  const handleTopRated = () => {
    setResData(resData?.filter((element) => element.info.avgRating > 4));
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="cardWrapperConatiner">
      <div className="searchAndFilter">
        <input
          type="text"
          placeholder="search restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <butoon
          onClick={() => {
            const searchData = resData.filter((element) => {
              return element.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            console.log(searchData);
            setFilteredData(searchData);
          }}
        >
          Search
        </butoon>
        <button className="topRated" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>
      <div className="card">
        {filteredData?.map((resData) => (
          <CardContainer key={resData.info.id} data={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
