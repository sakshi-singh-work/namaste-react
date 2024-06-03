const RestaurantPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white absolute p-2 m-4 bg-yellow-400 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantPromoted;
