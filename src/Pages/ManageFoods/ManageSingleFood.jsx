import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {
    const singledata = useLoaderData()
    console.log("from singl data",singledata);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default ManageSingleFood;