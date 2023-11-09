import { useLoaderData, useParams } from "react-router-dom";

const ManageSingleFood = () => {
    const foodData = useLoaderData()
    console.log(foodData);
    const { id } = useParams()
    console.log(id);


    // const filterData = data.find(filter=> )



    return (
        <div>
            {
                foodData.map(data => <div key={data._id} className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Requester Name</th>
                                <th>Requester Email</th>
                                <th>Request Date</th>
                                <th>Status</th>
                                <th>id</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.
                                                    userPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{data.userName}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2>{data.userEmail}</h2>
                                </td>
                                <td>
                                    <h2>{data.userEmail}</h2>
                                </td>
                                <td>{data.foodId}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{data?.foodStatus}</button>
                                    <button className="btn btn-ghost btn-xs">Change</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default ManageSingleFood;