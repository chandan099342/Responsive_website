import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Commom from "./Common";


const Home = () => {
    return(
        <>
            
            <Commom
                name="Grow your business with"
                imgsrc={"./src/images/food1.jpg"}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};
 export default Home;