

const About = () => {
    return (
        <div className="md:mt-20 md:mb-20 px-5 md:px-16">
            <h2 className="text-3xl mt-10 mb-10 font-bold text-center">About Us</h2>
            <div className="flex lg:flex-row flex-col gap-8">
                <div className="flex-1">
                    <img src="https://i.postimg.cc/mky75M1R/24721219-6896001.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <p className="text-lg mt-10">Welcome to our food sharing community! At Food Thrive, we are dedicated to making a positive impact on our local communities and the environment by reducing food waste and ensuring that no one goes hungry. Our journey began with a simple idea: why should perfectly good food go to waste when it can nourish those in need? We connect individuals, businesses, and organizations with surplus food to those who can benefit from it most. Our mission is to create a world where sharing food and reducing surplus is second nature, and we believe that together, we can make a meaningful change. Join us in this important endeavor as we work towards a more sustainable, compassionate, and food-secure future for all.
                    </p>
                    <p className="text-lg">At Food Thrive, we are passionate about fostering a community of sharing and reducing food waste. Our journey started with a commitment to address the pressing issues of food insecurity and environmental sustainability. Every day, millions of tons of edible food go to waste, while many individuals and families struggle to put nutritious meals on their tables. We have made it our mission to bridge this gap. Through our platform, we connect individuals, restaurants, grocery stores, and local food banks to ensure that surplus food finds its way to those who need it most. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;