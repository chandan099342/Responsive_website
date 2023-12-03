import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Commom from "./Common";


const About = () => {
    return(
        <>
           <Commom
                name="Welcome to About page"
                imgsrc={"./src/images/food4.jpg"}
                visit="/contact"
                btname="Contact Now"
           />
        </>
    );
};
 export default About;