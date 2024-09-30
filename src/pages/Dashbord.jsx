import React,{useState,useEffect} from 'react'
import View from './Components/View'
import { getContact } from '../allApi'
import { Link } from 'react-router-dom'


function Dashbord() {
  const [contact,setContact]=useState([])
  const [resp,setresp]=useState({})
  useEffect(()=>{
  getData()
  },[resp])

  const getData=async()=>{
    const result=await getContact()
    // console.log(result)
    if(result.status==200){
     
      setContact(result.data)
      console.log(result.data)

    }
  }
  return (
    <>
    <div className='container-fluid border border-3 border-dark shadow p-2 mt-3'>
    <div className='mb-3 mt-2'>
         <div >
        <Link to={'/'}><button className='btn  border shadow' style={{borderRadius:'30px',padding:'8px 25px'}} ><i className="fa-solid fa-arrow-left fa-2xl" size="2xl" style={{color: "#63E6BE",}} /></button></Link></div>

      </div>
     {
      contact.length>0?
      <div className='d-flex flex-wrap'>
      {
        contact.map(item=>(
          <View cont={item} res={setresp}/>

        ))
      }
      </div>
      :
      <h4>No contacts</h4>
     
     }
             
    
      </div>
     
     
      </>
  )
}

export default Dashbord