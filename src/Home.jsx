import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "../src/imgggg.jpg"
import Common from './Common';
const Home=()=>{
return(
    <>
    <Common name="Grow your Buisness with" imgsrc={web} visit="/service" bname="Get Started"/>
    </>
)
}
export default Home;