import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
    const [user,setUser] = useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        work:'',
        add:'',
        desc:''
        });
    const onInputChange =(e) => {
           setUser({
                ...user,[e.target.name]:e.target.value
            })
    }

    const onInputSubmit =async (e) => {
        e.preventDefault();
        console.log(user);
        const {name,email,age,mobile,work,add,desc} = user;

        const res = await fetch('http://localhost:4000/register',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,age,mobile,work,add,desc
          })
        })

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data){
          console.log("error");
          alert("error");
        }
        else {
          alert("data added");
          navigate('/');
          console.log("data added");
        }
    
    //working code below to add user till or done
    
      //  const result=await axios.post(`http://localhost:4000/register`,user)
      //   .then(result=>console.log(result))
      //   .catch(err=>console.log(err));
      //  // const data = await result.json();
      //  navigate('/');
       
          //or

        
    }
  return (
    <div className='container'>
     <NavLink to='/'>Home</NavLink>
     <form className='mt-4'> 
  <div class="form-group">
    <div className='row'>

        <div className='mb-3 col-lg-6 col-md-6 col-12'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' onChange={onInputChange} className="form-control" id="name" placeholder="Enter Name"/>
        </div>

 
  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="email">Email</label>
    <input type="email" onChange={onInputChange} className="form-control" name='email' id="email" placeholder="Enter Email"/>
    <small id="email"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="Age">Age</label>
    <input type="text" onChange={onInputChange} className="form-control"  name='age' id="age" placeholder="Enter Age"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="mobile">Mobile</label>
    <input type="text" onChange={onInputChange} className="form-control" name='mobile' id="mobile" placeholder="Enter Mobile"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="work">Work</label>
    <input type="text" onChange={onInputChange} className="form-control" name='work' id="work" placeholder="Enter work"/>
  </div>
  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="address">Address</label>
    <input type="text" onChange={onInputChange} className="form-control" name='add' id="work" placeholder="Enter address"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="description">Desription</label>
    <textarea className="form-control" onChange={onInputChange} name='desc' id="desc" row='10' cols='30' placeholder="Enter Desription"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={onInputSubmit}>Submit</button>
  </div>
  </div>
</form>
    </div>
  )
}

export default Register

