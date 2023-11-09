import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {
    const details = useLoaderData()
    const { user } = useContext(AuthContex)
    // console.log('from details',details);

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    const handleRequestFood = event => {
        event.preventDefault()
        const form = event.target
        const note = form.note.value
        const money = form.money.value
        const requestFood = {
            note, money, foodName: details.foodName, foodImage: details.photo, foodId: details._id, danarEmail: details.email, donatorName: details.name, userEmail: user.email, userPhoto: user.photoURL, userName: user.displayName, requestDate: getCurrentDate(), pickupLocation: details.pickupLocation,foodStatus: details.foodStatus, expireDate: details.date
        }
        console.log(requestFood);

        // send data to database
        fetch('http://localhost:5000/requestFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Product Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }




return (
    <div className="w-3/4 mx-auto">
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="" src={details.photo} alt="Movie" /></figure>
            <div className="card-body w-full text-lg font-semibold">
                <p>pickup location:{details.pickupLocation}</p>
                <p>Donar Name:<br></br>{details.name}</p>
                <p>Food Name:<br></br> {details.foodName}</p>
                <p>Number Of server: {details.foodQuantity}</p>
                <p>Expire date: {details.date}</p>
                <div className="card-actions justify-end">
                     {/* The button to open modal */}
                     <a href="#my_modal_8" className="btn">request</a>
                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                 <form onSubmit={handleRequestFood}>
                            <div className="modal-box space-y-2">
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Food Name</span>
                                        <input type="text" value={details.foodName} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Food Image</span>
                                        <input type="text" readOnly value={details.photo} placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Food Id</span>
                                        <input type="text" value={details._id} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Donator email</span>
                                        <input type="text" value={details.email} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span> Donator Name</span>
                                        <input type="text" value={details.name} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>User email</span>
                                        <input type="text" value={user?.email} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>User Name</span>
                                        <input type="text" value={user?.displayName} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Request Date</span>
                                        <input type="text" value={getCurrentDate()} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Pickup Location</span>
                                        <input type="text" value={details.pickupLocation} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Expire Date</span>
                                        <input type="text" value={details.date} readOnly placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Additional Notes</span>
                                        <input type="text" name="note" placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group">
                                        <span>Donation Money</span>
                                        <input type="text" name="money" placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="modal-action">
                                    <button className="btn btn-accent">request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Details;