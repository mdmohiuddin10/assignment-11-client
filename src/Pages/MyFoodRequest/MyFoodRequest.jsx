import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../firebase/AuthProvider";


const MyFoodRequest = () => {
    const { user } = useContext(AuthContex)
    const [request, setRequest] = useState([])
    console.log(request);


    const url = `http://localhost:5000/requestFood?userEmail=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [url])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/requestFood/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted Successfully')
                const remaining = request.filter(book=> book._id !== id);
                setRequest(remaining)
            }
        })

    }




    return (
        <div>
            <h2>hello {request.length}</h2>
            {
                request.map(food =>
                    <div key={food._id} className="overflow-x-auto">
                        <table className="table mb-10">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Donator Name</td>
                                    <td>{food.donatorName}</td>
                                </tr>
                                <tr>
                                    <td>Pickup Location</td>
                                    <td>{food.pickupLocation}</td>
                                </tr>
                                <tr>
                                    <td>Expire Date</td>
                                    <td>{food.expireDate}</td>
                                </tr>
                                <tr>
                                    <td>Request Date</td>
                                    <td>{food.requestDate}</td>
                                </tr>
                                <tr>
                                    <td>Your Donation Amount</td>
                                    <td>{food.money}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{food?.foodStatus}</td>
                                </tr>
                                {/* row 2 */}
                            </tbody>
                           {
                            food.foodStatus? 
                            <div className="card-actions justify-end">
                            <button onClick={()=>handleDelete(food._id)} className="btn btn-accent">Cancel Reques</button>
                            </div>: ''
                           }
                        </table>
                    </div>
                )
            }

        </div>
    );
};

export default MyFoodRequest;