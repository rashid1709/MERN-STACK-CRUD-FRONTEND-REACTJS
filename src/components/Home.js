import React, { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

function Home() {

  const [getuserdata,setUserData] = useState([]);

  const getdata =async (e) => {
   console.log(getuserdata);


    // const res = await fetch('http://localhost:4000/getdata',{
    //   method:"GET",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
     
    // })

    // const data = await res.json();
    // console.log(data);

    // if(res.status === 404 || !data){
    //   console.log("error");
     
    // }
    // else {
    //   setUserData(data);
    //   console.log("get data");


    // }

//working code below till or done  for get all data both method are woking

//or

    const result=await axios.get('http://localhost:4000/getdata');
    console.log(result.data);
    setUserData(result.data);

   
}

useEffect(()=>{
  getdata();
},[]);

const deleteUser = async (id) => {
  const res2 = await fetch(`http://localhost:4000/deleteuser/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
  });
     const datadelete = await res2.json();
    console.log(datadelete);

   if(res2.status === 404 || !datadelete){
       console.log("error");
     
     }
     else {
      console.log("user Deleteted");
      alert("Data Delete");
      getdata();
    }

    //or delete by axios

  // await axios.delete(`http://localhost:4000/deleteuser/${id}`);
 //  getdata();

}

  return (
    <div className='mt-5'>
        <div className='container'>
           <div className='add_btn mt-2'>
            <NavLink to='/register' className='btn btn-primary mb-2'>Add data</NavLink>
           </div>

<table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      getuserdata.map((item,index)=>{
        return(
          <tr key={index}>
          <th scope="row">{index + 1 }</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.work}</td>
          <td>{item.mobile}</td>
          <td className='d-flex justify-content-around'>
                <NavLink to={`/view/${item._id}`}><button className='btn btn-success'><RemoveRedEyeIcon/></button></NavLink>
               <NavLink to={`/edit/${item._id}`}><button className='btn btn-primary'><BorderColorIcon /></button></NavLink> 
                <button className='btn btn-danger' onClick={()=>deleteUser(item._id)}><DeleteIcon/></button>
          </td>
    
        </tr>
        )
      })
    }
   
    
  </tbody>
</table>
      
        </div>
    </div>
    
  )
}

export default Home
