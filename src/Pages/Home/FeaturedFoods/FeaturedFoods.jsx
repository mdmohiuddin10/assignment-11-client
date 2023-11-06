import { useEffect, useState } from "react";


const FeaturedFoods = () => {
    const [food, setFood] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allfoods')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    
    console.log(food);

    return (
        <div>
            <h2>food:{food.length} </h2>
        </div>
    );
};

export default FeaturedFoods;