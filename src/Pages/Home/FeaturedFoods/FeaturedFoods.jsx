import { useEffect, useState } from "react";



const FeaturedFoods = () => {

    const [foods, setFoods] = useState([])
    console.log(foods);

    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
          {
            foods.map(food=>  <div key={food._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={food.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
          }

        </div>
    );
};

export default FeaturedFoods;