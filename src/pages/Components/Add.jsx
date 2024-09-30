import React ,{useState}from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../../allApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Add() {
    const [contact,setContact]=useState({
        Name:"",Phone:"",Email:""
    })

    const handleAdd=async()=>{
        console.log(contact)
        const{Name,Phone,Email}=contact
        if(!Name,!Phone,!Email){
            // toast.warning("enter valid inputs")
            toast.warning("enter valid inputs")
        }
        else{
            const result=await addContact(contact)
            if(result.status=201){
              toast.success("Contact Saved Successfully")
                setContact({Name:"",Phone:"",Email:""})
                clr()
            }
            else{
                toast.error("Adding failed")
            }

        }
        
       
    }
    const fnme=useRef('');
    const bname=useRef('');
    const cname=useRef('');
    const clr=()=>{
      // setContact({Name:'',Phone:'',Email:''})
      fnme.current.value='';
      bname.current.value='';
      cname.current.value='';

    }


    // console.log(contact)
  return (
    <>
    <div className='shadow border-ino' style={{height:'600px',width:'530px',borderRadius:'39px'}}>
       <div className=' p-5'>
        <div className='text-center mb-5'>
          <h3>Create New Contact</h3>
        </div>
       <FloatingLabel
        controlId="floatingInputID"
        label="Enter the name"
        className="mb-3" 
      >
        <Form.Control  ref={fnme} style={{borderRadius:'30px'}} type="text" placeholder="name@example.com"onChange={(e)=>{setContact({...contact,Name:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingPasswordID" label="Enter the number">
        <Form.Control required pattern='' ref={bname} style={{borderRadius:'30px'}} type="text" placeholder="Enter the number" onChange={(e)=>{setContact({...contact,Phone:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingPasswordmail" label="Enter e-mail id">
        <Form.Control ref={cname} style={{borderRadius:'30px'}}   type="text" placeholder="Enter E-mail id" onChange={(e)=>{setContact({...contact,Email:e.target.value})}} />
      </FloatingLabel>
      <div className='d-flex justify-content-between mt-5'>
      <button className='btn  btn-danger ' style={{borderRadius:'30px',padding:'8px 25px'}} onClick={clr}>Cancel</button>
        <button className='btn  btn-success ' style={{borderRadius:'30px',padding:'8px 25px'}}  onClick={handleAdd}>Save</button>
      </div>
      <Link to={'/dash'} style={{textDecoration:'none'}}>
      <div className='d-grid mt-5'>
        <button className='btn btn-info '> view contacts</button>
      </div></Link>
      {/* <FloatingLabel   controlId="floatingPasswordID" label="Add Profile picture">
        <Form.Control type="text" placeholder="Add profile picture" />
      </FloatingLabel> */}
     

       </div>

    </div>
    
   
    </>
  )
}

export default Add