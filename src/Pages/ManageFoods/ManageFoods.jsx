import { useContext } from "react";
import { AuthContex } from "../../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";


// const ManageFoods = () => {
//     const { user } = useContext(AuthContext);
//     const manageFoods = useLoaderData();
//     console.log(user);

//     // Filter foods based on the user's email
//     const filterFoods = manageFoods.filter(newFoods => newFoods.email === user.email);




//     return (
//         <div>
//             {/* <h2>Hello: {filterFoods.length}</h2> */}
//             <h2>hello</h2>

//         </div>
//     );
// };

// export default ManageFoods;



const ManageFoods = () => {
    const { user } = useContext(AuthContex)
    const manageFoods = useLoaderData();

    //     // Filter foods based on the user's email

    const filterFoods = manageFoods.filter(newFoods => newFoods.email === user.email);

    console.log(filterFoods);
    return (
        <div>
            <h2>hello {filterFoods.length}</h2>
        </div>
    );
};

export default ManageFoods;