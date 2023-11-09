import { Helmet } from "react-helmet";
import About from "./AboutSection/About";
import Banner from "./Banner/Banner";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";
import SuccessStory from "./SuccessStory/SuccessStory";





const Home = () => {
    return (
        <div className="px-5 md:px-10">
            <Helmet>
                <title>Food Thrive | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <About></About>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;