import Navbar from "./src/components/Navbar";
import React from "react";
import Carousel2 from "./src/components/Carousel2";
import Footer from "./src/components/Footer";


function Projects(){
    return(
        <div className="project">
            <Navbar/>
            <Carousel2/>
            <Footer/>
        </div>
    )
}

export default Projects;