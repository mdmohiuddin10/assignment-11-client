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
    return (
        <div>
            <h2>hello {request.length}</h2>
        </div>
    );
};

export default MyFoodRequest;