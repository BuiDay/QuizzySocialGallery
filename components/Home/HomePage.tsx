import React from "react";
import Hero from "./Hero";
// import About from "./About";
import Line from "./Line";
import dynamic from "next/dynamic";

const About = dynamic(() => import('./About'), {
    loading: () => <p>Loading...</p>,
  })
  
const HomePage = () => {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden md:p-0 pt-[100px] bg-white">
            <Hero />
            {/* <Line /> */}
            <About />
        </div>
    );
};

export default HomePage;
