import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    const [search, setSearch] = useState("");
    const [sortedFoods, setSortedFoods] = useState(null);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSortByExpireDate = () => {
        const sortedByDate = [...allFoods].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedFoods(sortedByDate);
    };

    const filteredFoods = (sortedFoods || allFoods).filter((food) =>
        food.foodName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-5 md:mx-10">
            <Helmet>
                <title>Food Thrive | Available Foods</title>
            </Helmet>
            <div className="md:flex-row gap-10 flex-col">
                <div className="join">
                    <input
                        className="input input-bordered join-item"
                        placeholder="Food name"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button className="btn join-item rounded-r-full">Search</button>
                </div>
                <button className="btn w-[200px] md:mt-0 mt-5 mx-auto btn-success" onClick={handleSortByExpireDate}>
                    Sort by Expire Date
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
                {filteredFoods.map((food) => (
                    <div key={food._id} className="card bg-base-100 shadow-xl">
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
