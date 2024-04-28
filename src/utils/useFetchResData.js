import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../component/constant";

const useFetchResData = (restaurantId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU + restaurantId);
    const json = await data.json();
    console.log(json);
    setResData(json?.data);
  };
  return resData;
};

export default useFetchResData;
