import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddCategory, deleteCategory, getAllCategory, getAvideo, updateCategory } from '../Services/allApi';
import VideoCard from './VideoCard';

function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCategory = async()=>{
    if(categoryName){
        let body = {
          categoryName,allVideos:[]
        }
        const response= await AddCategory(body)
        console.log(response);
        if(response.status>= 200 && response.status<300){
          handleClose()
          setCategory("")
          getCategories()
        }
        else{
          toast.error("something went wrong");
        }
    }
    else{
      toast.warning("please provide a category name !");
    }
  }

  const getCategories = async()=>{
    const{data} =await getAllCategory()
    setAllCategories(data)
  }
  useEffect(()=>{
    getCategories()
  },[])
  const handleDelete= async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("video dropped inside the Category",+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);
      // get video details
  const {data} = await getAvideo(videoId)
  console.log(data);
  //get category details
  const selectedCategory = allCategories?.find(item=>item.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  //make apic call
  await updateCategory(categoryId,selectedCategory)
  getCategories()
  }


  const dragOver = (e)=>{
    console.log("video dragged over the Category");
    e.preventDefault()
  }
    return (
    <>
    <div className="d-grid ms-3">
      <Button onClick={handleShow} >
        Add New category
      </Button>
    </div>
    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className='ms-5 border border-black mt-2 me-4 rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div>
               <h6>{item?.categoryName}</h6>
               <button onClick={()=> handleDelete(item.id)} className='btn'><i class="fa-solid fa-trash-can text-danger"></i></button>
          </div>
          <Row>
      {
        item?.allVideos && item?.allVideos.map(
          card=>(
            <Col sm ={12}>
              <VideoCard displayData={card} insideCategory ={true}/>
            </Col>
          )
        )
      }
    </Row>
        </div>
      )): <p>No category to display</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please Fill Details Below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className='text-white'  >Enter Category Name:</Form.Label>
              <Form.Control type='text' className='text-dark' onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Category Name:' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCategory} >Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Category