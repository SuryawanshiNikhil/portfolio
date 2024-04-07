import React, { useState } from 'react'
const Contact=()=>{
    const [Data,setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:" ",
    })
    const inputEv=(event)=>{
 const {name,value}=event.target;
 setdata((prev)=>{
return{
    ...prev,
    [name]:value,
}

 })
    }
    const formSubmit=(e)=>{
e.preventDefault();
alert(`Fullname : ${Data.fullname} Phone no : ${Data.phone} Email : ${Data.email} msg : ${Data.msg}`)
    }
return(
    <>
    <div className='my-3'>
        <h1 className='text-center'>Contact us</h1>
    </div>
    <div className='container contact-div'>
        <div>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  name='fullname'
  value={Data.fullname}
  onChange={inputEv}
  placeholder="Enter the name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile no.</label>
  <input type="Number" class="form-control" id="exampleFormControlInput1"
  name='phone'
  value={Data.phone}
  onChange={inputEv}
   placeholder="Mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
  name='email'
  value={Data.email}
  onChange={inputEv}
   placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
   name='msg'
   value={Data.msg}
   onChange={inputEv}
   ></textarea>
</div>
                    <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    </>
)
}
export default Contact;