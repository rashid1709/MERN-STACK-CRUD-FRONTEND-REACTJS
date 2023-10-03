import React, { useState,useEffect } from 'react';
import { NavLink,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {

  const {id} = useParams("");
  const navigate = useNavigate();
    const [user,setUser] = useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        work:'',
        address:'',
        description:''
        });
    const onInputChange =(e) => {
            setUser({
                ...user,[e.target.name]:e.target.value
            })
    }


    useEffect(()=>{
      getdata();
    },[]);
 
 

  const getdata =async (e) => {
    const res = await fetch(`http://localhost:4000/getuser/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
     
    })

    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
      console.log("error");
     
    }
    else {
      setUser(data);
      console.log("get data");


    }

//working code below till or done  for get particular id data both method are woking

//or

    // const result=await axios.get(`http://localhost:4000/getuser/${id}`);
    // console.log(result.data);
    // setUser(result.data);

   
}




    const onInputSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const {name,email,age,mobile,work,add,desc} = user;

        const res2 = await fetch(`http://localhost:4000/updateuser/${id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,age,mobile,work,add,desc
          })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
          console.log("error");
          alert("error");
        }
        else {
          alert("data updated"); 
          navigate('/');
          console.log("data updated");
        }


         //working code below to edit user till or done
    
      //  const result=await axios.patch(`http://localhost:4000/updateuser/${id}`)
      //   .then(result=>console.log(result))
      //   .catch(err=>console.log(err));
      //  // const data = await result.json();
      //  navigate('/');

    }




  return (
    <div className='container'>
       
     <NavLink to='/'>Home</NavLink>
     <h4 className='text-center'>Edit a User</h4>
     <form className='mt-4' onSubmit ={onInputSubmit}> 
  <div className="form-group">
    <div className='row'>

        <div className='mb-3 col-lg-6 col-md-6 col-12'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' onChange={onInputChange} className="form-control" id="name" value={user.name} placeholder="Enter Name"/>
        </div>

 
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="email">Email</label>
    <input type="email" onChange={onInputChange} className="form-control" name='email' id="email" value={user.email} placeholder="Enter Email"/>
    <small id="email"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="Age">Age</label>
    <input type="text" onChange={onInputChange} className="form-control"  name='age' id="age" value={user.age} placeholder="Enter Age"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="mobile">Mobile</label>
    <input type="text" onChange={onInputChange} className="form-control" name='mobile' id="mobile" value={user.mobile} placeholder="Enter Mobile"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="work">Work</label>
    <input type="text" onChange={onInputChange} className="form-control" name='work' id="work" value={user.work} placeholder="Enter work"/>
  </div>
  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="address">Address</label>
    <input type="text" onChange={onInputChange} className="form-control" name='add' id="work" value={user.add} placeholder="Enter address"/>
  </div>

  <div className='mb-3 col-lg-6 col-md-6 col-12'>
    <label htmlFor="description">Desription</label>
    <textarea className="form-control" onChange={onInputChange} name='desc' id="description" value={user.desc} row='10' cols='30' placeholder="Enter Desription"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </div>
</form>
    </div>
  )
}

export default Edit

