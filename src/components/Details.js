import React,{useState,useEffect} from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const [getuserdata,setUserData] = useState([]);
  const {id} = useParams("");
  console.log(id);
 

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
      setUserData(data);
      console.log("get data");


    }

//working code below till or done  for get particular id data both method are woking

//or

    // const result=await axios.get(`http://localhost:4000/getuser/${id}`);
    // console.log(result.data);
    // setUserData(result.data);

   
}

useEffect(()=>{
  getdata();
},[]);

  return (
    <div className='container mt-3'>
      <h1 style={{fontWeight:400}}>Welcome in Crud App </h1>
      <Card sx={{ maxWidth:600 }}>
      <div className='add_btn'>
      <NavLink to={'/'}>Back to Home</NavLink>
            <button className='btn btn-danger'><DeleteIcon/></button>
            <button className='btn btn-primary mx-2'><BorderColorIcon /></button>
            <button className='btn btn-danger'><DeleteIcon/></button>
            </div>
      <CardContent>
        <div className='row'>
        <div className='left_view col-lg-6 col-md-6 col-12'>
        <img src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg" 
        style={{width:40}} alt="profile" />
        <h3 className='mt-2'>Name:<span>{getuserdata.name}</span></h3>
        <h3 className='mt-3'>Age:<span>{getuserdata.age}</span></h3>
        <p className='mt-3'><EmailIcon />Email: <span>{getuserdata.email}</span></p>
        <p className='mt-3'><WorkIcon />Occupation: <span>{getuserdata.work}</span></p>
        </div>
        <div className='right_view col-lg-6 col-md-6 col-12'>
            
            <p className='mt-3'><MobileScreenShareIcon />Mobile: <span>{getuserdata.mobile}</span></p>
            <p className='mt-3'><LocationOnIcon />Address: <span>{getuserdata.add}</span></p>
            <p className='mt-3'><DescriptionIcon />Description: <span>{getuserdata.desc}</span></p>
        </div>
        </div>
        </CardContent>
        
        </Card>
    </div>
  )
}

export default Details
