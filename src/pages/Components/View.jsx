import React from 'react'
import { deleteContact } from '../../allApi'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


function View({cont,res}) {
  


 const handleDelete=async()=>{
    const result=await deleteContact(cont.id)
    if(result.status==200){
      toast.success("Contact Deleted")
      res(result)
    }
   

  }

  return (
   <>
   <div className='  p-3' > 
   <div style={{ width: '350px',height:'180px',border:'',borderRadius:'40px', backgroundColor:'rgb(58, 9, 96)'}} className=' p-3 shadow  ' >
      
      <h4 className='text-center'>{cont?.Name}</h4>
      
      <h6> <span><i className="fa-solid fa-phone pe-3" style={{color: "#74C0FC",}} /></span>{cont?.Phone}</h6>
      <h6><span><i className="fa-solid fa-square-envelope pe-3" style={{color: "#74C0FC",}} /></span>{cont?.Email}</h6>
      <div className='d-flex justify-content-between mt-4'>
      <button className='btn btn-danger  rounded btn-sm ' onClick={handleDelete}><i className="fa-solid fa-trash" style={{color: "black"}}/></button>
    <Link to={`/edit/${cont?.id}`}> <button className='btn  btn-warning btn-sm rounded ' ><i className="fa-solid fa-pen-to-square " style={{color: 'black'}} /></button></Link>
    </div>
    </div>
   
 
  
   </div>
   </>
    
  )
}

export default View