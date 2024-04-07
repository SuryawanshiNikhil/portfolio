import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Tech from "../src/TEchneo.svg"
import Common from './Common';
const About=()=>{
return(
    <>
     <Common name="Welcome To about page" imgsrc={Tech} visit="/contact" bname="Contact Now"/>
    </>
)
}
export default About;