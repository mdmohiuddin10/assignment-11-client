import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[800px] md:h-[600px] h-[300px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Bbn14YK9/volunteers-collecting-food-donations-medium-shot.jpg" className="w-full rounded-xl" />
                <div className="absolute h-full flex  rounded-xl items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                    <div className='text-white pl-10 space-y-2 md:space-y-7 md:w-1/2 w-full px-5 '>
                        <h2 className='lg:text-6xl md:text-2xl text-xl font-bold'>Join the Movement of Compassion and Sustainability</h2>
                        <p className="md:text-xl text-sm">Building a Sustainable Future Through Community Food Sharing: Join Our Platform to Share, Reduce Surplus, and Create a Hunger-Free World Together.</p>

                        <NavLink to={'/contact'}>
                        <button className="btn btn-warning md:mr-5 mr-2">Contact</button>
                        </NavLink>
                        <NavLink to={'/about'}>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811]">About Us</button>
                        </NavLink>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/0Qt6NGvT/smiley-female-volunteer-holding-food-donations.jpg" className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                    <div className='text-white pl-10 space-y-1 md:space-y-7 md:w-1/2 w-full px-5'>
                        <h2 className='lg:text-6xl md:text-2xl text-xl font-bold'>Share Food, Reduce Waste, Build a Sustainable Future.</h2>
                        <p className="md:text-xl text-sm">Share More, Waste Less: Our Community Food Sharing Platform - Uniting Communities for Sustainable Living and Hunger Eradication</p>

                        <button className="btn btn-warning md:mr-5 mr-2">Contact</button>
                        <NavLink to={'/about'}>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811]">About Us</button>
                        </NavLink>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/fTWGX6Xn/close-up-volunteers-working-together.jpg" className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                    <div className='text-white pl-10 md:space-y-7 space-y-2 md:w-1/2 w-full'>
                        <h2 className='lg:text-6xl md:text-2xl text-xl font-bold'>Together We Can Solve Hunger</h2>
                        <p className="md:text-xl text-sm">Together We Can Solve Hunger: Join Our Community Food Sharing Platform - A Global Movement to Share Excess, Reduce Waste, and Nourish Souls</p>

                        <button className="btn btn-warning md:mr-5 mr-2">Contact</button>
                        <NavLink to={'/about'}>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811]">About Us</button>
                        </NavLink>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/k4zy4Rxg/top-view-different-dishes.jpg" className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                    <div className='text-white pl-10 space-y-7 md:w-1/2 w-full '>
                        <h2 className='lg:text-6xl md:text-2xl text-xl font-bold'>Nourishing Communities, One Meal at a Time</h2>
                        <p className="md:text-xl text-sm">Nourishing Communities: Our Food Sharing Platform Unites to Share, Reduce Waste, and Create a Sustainable, Hunger-Free World</p>

                        <button className="btn btn-warning md:mr-5 mr-2">Contact</button>
                        <NavLink to={'/about'}>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811]">About Us</button>
                        </NavLink>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;