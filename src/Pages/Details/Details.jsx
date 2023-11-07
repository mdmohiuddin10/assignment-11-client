import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Details;