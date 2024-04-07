import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "../src/imgggg.jpg"
const Common=(props)=>{
return(
    <>
    <section id='Header' className='d-flex align-item-centere'>
    <div className='container-fluid nav-bg'>
    <div className='row'>
<div className='col-10 mx-auto' >
<div className='row'>
    <div className=' col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column' >
        <h1 className='content' > {props.name} <strong className='brand-name'>NikTech</strong></h1>
        <h2 className='my-3'>we are the team talented making website</h2>
        <div className='mt-10'>
 <NavLink to={props.visit} className='btn-get-started'>{props.bname}</NavLink>
        </div>
    </div>
    <div className='col-lg-6 order-1 order-lg-2 header-img'>
<img  src={props.imgsrc} className="img-fluid animated move-up-down" alt='home img'/>
</div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
)
}
export default Common;