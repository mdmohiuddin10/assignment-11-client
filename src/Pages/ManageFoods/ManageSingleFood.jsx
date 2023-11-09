import { useLoaderData, useParams } from "react-router-dom";
import { useState } from 'react';

const ManageSingleFood = () => {
    const foodData = useLoaderData();
    const { id } = useParams();
    const [filteredData, setFilteredData] = useState(foodData.filter(data => data.foodId === id));

    const handleStatusChange = () => {
        const updatedData = filteredData.map(data => {
            if (data.foodId === id) {
                return { ...data, foodStatus: 'delivered' };
            }
            return data;
        });
        setFilteredData(updatedData);
    };

    return (
        <div>
            <h2>Length: {filteredData.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-lg font-bold">
                            <th>Requester Picture</th>
                            <th>Requester Name</th>
                            <th>Requester Email</th>
                            <th>Request Time and Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-lg font-bold">
                            <td>
                                <div className="flex items-center space-x-3">
                                    <img src={filteredData[0].userPhoto} alt="" />
                                </div>
                            </td>
                            <td>{filteredData[0].userName}</td>
                            <td>{filteredData[0].userEmail}</td>
                            <td>{filteredData[0].requestDate}</td>
                            <th>
                                <h1>{filteredData[0].foodStatus}</h1>
                                <button className="btn btn-accent" onClick={handleStatusChange}>
                                    Change
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSingleFood;
