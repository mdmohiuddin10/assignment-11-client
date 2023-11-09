import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Updatedata = () => {
    const {user} = useContext(AuthContex)
    const previusData = useLoaderData()
    const {_id} = previusData
    // console.log(previusData);


    const handleUpdateFood = event => {
        event.preventDefault()
        const form = event.target
        const foodName = form.foodName.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.pickupLocation.value
        const date = form.date.value
        const additionalNotes = form.additionalNotes.value
        const photo = form.photo.value
        const foodStatus = form.foodStatus.value
        const updatedData = { 
            foodName,
            foodQuantity,
            pickupLocation,
            date,
            additionalNotes,
            photo,
            foodStatus,
            donatorImage: user.photoURL,
            name: user.displayName,
            email: user.email
        }
        console.log(updatedData);

        // send data to the server
        fetch(`https://assignment-11-server-omega-snowy.vercel.app/allfoods/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }



    return (
        <div className="bg-[#F4F3F0] md:p-20 p-10">
            <h2 className="text-3xl font-semibold text-center">Update Foods Data</h2>
            <form onSubmit={handleUpdateFood}>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodName" defaultValue={previusData.foodName} className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodQuantity" defaultValue={previusData.foodQuantity} className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pickupLocation" defaultValue={previusData.pickupLocation} className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Expired Date/Time</span>
                        </label>
                        <label className="input-group">
                            <input type="date" defaultValue={previusData.date} name="date" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="additionalNotes" defaultValue={previusData.additionalNotes} className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={previusData.photo} className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodStatus" placeholder="Food Status" defaultValue={'available'} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update" className="btn btn-block bg-[#D2B48C] mt-5" />
            </form>
        </div>
    );
};

export default Updatedata;