import { useContext } from "react";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
    const {user} = useContext(AuthContex)


    const handleAddFood = event => {
        event.preventDefault()
        const form = event.target
        const foodName = form.foodName.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.pickupLocation.value
        const date = form.date.value
        const additionalNotes = form.additionalNotes.value
        const photo = form.photo.value
        const foodStatus = form.foodStatus.value
        const newProduct = { 
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
        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/allfood',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
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
        <div className="bg-[#F4F3F0] md:p-20 p-10">
            <h2 className="text-3xl font-semibold text-center">Add Foods</h2>
            <form onSubmit={handleAddFood}>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodQuantity" placeholder=" Food Quantity" className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Expired Date/Time</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="Expired Date/Time" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="additionalNotes" placeholder="Additional Notes" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Food Image" className="input input-bordered w-[300px] md:w-full" />
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
                <input type="submit" value="Add Foods" className="btn btn-block bg-[#D2B48C] mt-5" />
            </form>
        </div>
    );
};

export default AddFood;