import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uplaodVideo } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [show,setShow] =useState(false);
  
  const [video,setVideo]=useState({id:"",caption:"",url:"",embededlink:""})
console.log(video);
  const handleClose=()=> setShow(false);
  const handleShow=()=> setShow(true);
  const embededlink = (e)=>{

    const {value}=e.target
    if(value){
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embededlink:link})

    }
    else{
      setVideo({...video,embededlink:""})

    }

    // <iframe width="935" height="526" src="https://www.youtube.com/embed/QrbQpOTdTfM" title="Abraham Ozler | My Opinion | Jayaram | Malayalam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
  }

  const handleUpload = async ()=>{

    const {id,caption,url,embededlink}=video

    if(!id || !caption || !url || !embededlink){
      toast.warning('please enter all fields')
    }
    else{
      const response = await uplaodVideo(video)
      // console.log(response);
      if(response.status>200 && response.status<300){
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} video succesfully uploaded`)

        // hide modal
        handleClose()

      }
      else{
        // console.log(response);
      toast.error('please provide unique id')
      }
    }

  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='text-danger ms-2'>Upload Videos</h5>
        <button className=' ms-1' style={{backgroundColor:"transparent",border:'transparent'}} onClick={handleShow}>
          <i class="fa-solid fa-square-plus fa-beat-fade fs-5 "></i>
        </button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='bg-black'
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:"Times new Roman"}}>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 border rounded border-black" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="email" placeholder="Enter Video Id" />
            </Form.Group>

            <Form.Group className="mb-3 border rounded border-black" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})}type="email" placeholder="Enter Video Title" />
            </Form.Group>

            <Form.Group className="mb-3 border rounded border-black" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,url:e.target.value})} type="email" placeholder="Enter Video Image URL" />
            </Form.Group>

            <Form.Group className="mb-3 border rounded border-black" controlId="formBasicEmail">
            <Form.Control onChange={embededlink} type="email" placeholder="Enter Video Link" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="dark">UPLOAD</Button>
        </Modal.Footer>
      </Modal>
      </div>
      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  )
}

export default Add