import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const FeaturedFoods = () => {

  const [foods, setFoods] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/allfoods')
      .then(res => res.json())
      .then(data => setFoods(data))

  }, [])


  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {
          foods.map(food => <div key={food._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={food.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Item:{food.
                foodName}</h2>
              <div className="flex justify-between">
                <p>pickup loc:{food.pickupLocation}</p>
                <p>Expire date:{food.date}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Donator Name: {food?.name}</p>
                  <img className="w-[50px] rounded-full" src={food?.donatorImage} alt="" />
                </div>
                <div>
                  <p>Quantity: {food.foodQuantity}</p>
                </div>
              </div>
              <div>
                <p>Notes: {food.additionalNotes}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Detaies</button>
              </div>
            </div>
          </div>)
        }
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