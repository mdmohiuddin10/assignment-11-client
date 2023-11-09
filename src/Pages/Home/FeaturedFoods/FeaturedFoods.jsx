import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://assignment-11-server-omega-snowy.vercel.app/allfoods')
      .then((res) => res.json())
      .then((data) => {
        // Sort the food items by quantity in descending order
        data.sort((a, b) => b.foodQuantity - a.foodQuantity);
        setFoods(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {foods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={food.photo} alt="Food" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Item: {food.foodName}</h2>
              <div className="flex justify-between font-semibold">
                <p>Pickup Loc: {food.pickupLocation}</p>
                <p>Quantity: {food.foodQuantity}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 font-semibold">
                <img className="w-[60px] rounded-full" src={food?.donatorImage} alt="" />
                  <p>Donator:<br></br> {food?.name}</p>
                </div>
                <div className="font-semibold">
                  <p className="ml-20">Expire Date: {food.date}</p>
                </div>
              </div>
              <div>
                <p>Notes: {food.additionalNotes}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/details/${food._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions justify-center mt-10">
        <Link to={'/availablefoods'}>
          <button className="btn btn-primary">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
