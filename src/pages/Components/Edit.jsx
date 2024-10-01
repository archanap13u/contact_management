import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useRef ,useEffect,useState} from 'react';
// import { getContactToEdit } from '../../allApi';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit() {
  const{id}=useParams()
  const [values,setvalues]=useState({
    id:id,
    Name:'',
    Phone:'',
    Email:''

  }

  )
  useEffect( ()=>{
     axios.get('https://contact-management-server-j1he.onrender.com/contacts/'+id)
     .then(res=>{
      console.log(res)
      setvalues({...values,Name:res.data.Name, Phone:res.data.Phone, Email:res.data.Email})
      console.log(values)
     })

  },[])
 
// console.log(id)
  //  const name=useRef('')
  //  const number=useRef('')
  //  const mail=useRef('')
  //  const clear=()=>{
  //   name.current.value='';
  //   number.current.value='';
  //   mail.current.value='';
  //  }

   const handleEdit=()=>{
    axios.put('https://contact-management-server-j1he.onrender.com/contacts/'+id,values)
    .then(res=>{
      console.log(res)
     toast.success('Updated Successfully')
    })

   }
  //  const getData=async(id)=>{
  //   const result=await getContactToEdit(id)
  //   if(result.status==200){
  //     setvalues( setvalues({...values,Name:res.data.Name, Phone:res.data.Phone, Email:res.data.Email}))
  //     console.log(values)
  //   }
  //  }
    
  return (
  <>
  
  <div className='d-flex justify-content-center align-items-center 'style={{height:'80vh'}}>

    
  <div className='border shadow  w-50  '>
  <div className=' mb-4 me-3 border rounded' >
     <Link to={'/dash'}> <button className='btn  border-2 '><i className="fa-solid fa-xmark fa-2xl" size="xl" style={{color: "#63E6BE",}} /></button></Link>
    </div>
    <h4 className='text-center mb-4'>Change contact details</h4>
    
  <FloatingLabel
        controlId="floatingInputid"
        label="Contact name"
        className="mb-3"
      >
        <Form.Control  onChange={(e)=>{setvalues({...values,Name:e.target.value})}}  value={values?.Name} style={{borderRadius:'30px'}}  type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPasswordid" label="Contact number" className='mb-3'>
        <Form.Control onChange={(e)=>{setvalues({...values,Phone:e.target.value})}} value={values?.Phone} style={{borderRadius:'30px'}}  type="text" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPasswordie" label="Contact E-mail">
        <Form.Control onChange={(e)=>{setvalues({...values,Email:e.target.value})}} value={values?.Email}  style={{borderRadius:'30px'}}  type="email" placeholder="Password" />
      </FloatingLabel>
      <div className='d-flex justify-content-around mt-5'>
      <Link to={'/dash'} > <button className='btn btn-danger btn-sm ' style={{borderRadius:'30px',padding:'8px 25px'}}>Cancel</button></Link>
        <button className='btn btn-success btn-sm 'onClick={handleEdit} style={{borderRadius:'30px',padding:'8px 25px'}}>Save</button>
      </div>
      {/* <div className='mt-5' s>
        <Link to={'/dash'}><button className='btn  border shadow' style={{borderRadius:'30px',padding:'8px 25px'}} ><i className="fa-solid fa-arrow-left fa-xl" size="2xl" style={{color: "#63E6BE",}} /></button></Link></div> */}


  </div>

  </div>
  </>
    
  )
}

export default Edit