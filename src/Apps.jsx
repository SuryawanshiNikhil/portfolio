import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
const Apps=()=>{
    return(
        <>
        <Navbar/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
    )
}
export default Apps;