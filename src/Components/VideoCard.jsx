import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../Services/allApi';

function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);

  const{caption,embedLink}=displayData;
  let today = new Date()
  console.log(today);
  let timeStamp=(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today))
  let videoDetails = {
    caption,embedLink,timeStamp
  }
  await addToHistory(videoDetails)
}
  const removeVideo = async(id) =>{
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log("Drag Started...Video Id:"+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <div>
      <Card className='mb-3' draggable onDragStart={(e)=> dragStarted(e,displayData?.id)} style={{height:'200px',width:'200px',marginRight:'200px'}}>
        <Card.Img onClick={handleShow} varient="top" src={displayData?.url} style={{height:'200px',width:'200px'}}/>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{displayData?.caption}</h5>
            {insideCategory?"":<Button onClick={()=>removeVideo(displayData?.id)} className=' ms-2 bg-light' style={{backgroundColor:"transparent",border:'transparent'}}> <i class="fa-solid fa-trash-can text-danger"></i></Button>}
            </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <iframe width="100%" height="526" src={`${displayData?.embededlink}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default VideoCard