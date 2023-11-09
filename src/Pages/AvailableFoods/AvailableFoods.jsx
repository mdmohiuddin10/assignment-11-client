import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    const [search, setSearch] = useState("");
    // const [sort, setSort] = useState("");

    // Function to handle the input field change and update the searchQuery state
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    // Filter food items based on the search query
    const filteredFoods = allFoods.filter((food) =>
        food.foodName.toLowerCase().includes(search.toLowerCase())
    );

    // const handleSort = ()=>{
    //     allFoods.sort((a, b) => b.date - a.date);
    //     setSort(allFoods);
    // }

    return (
        <div>
            <div className="flex gap-10">
                <div className="join">
                    <input
                        className="input input-bordered join-item"
                        placeholder="Food name"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button className="btn join-item rounded-r-full">Search</button>
                </div>
                <button className="btn btn-success">Sort by Expire Date</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
                {filteredFoods.map((food) => (
                    <div key={food._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={food.photo} alt="Food" />
                        </figure>
                        <div className="card-body font-semibold">
                            <h2 className="card-title">Item: {food.foodName}</h2>
                            <div className="flex justify-between">
                                <p>Pickup Location: {food.pickupLocation}</p>
                                <p>Quantity: {food.foodQuantity}</p>
                            
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                <img className="w-[50px] rounded-full" src={food?.donatorImage} alt="" />
                                    <p>Donator:<br></br> {food?.name}</p>
                                   
                                </div>
                                <div className="card-actions ml-8 justify-end">
                                       <p>Expire Date: {food.date}</p>
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
        </div>
    );
};

export default AvailableFoods;
