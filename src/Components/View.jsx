import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllvideos } from '../Services/allApi'

function View({setUploadVideoServerResponse}) {
  const [allvideo,setAllvideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getUploadVideos = async ()=>{
    // make api call
    const {data} = await getAllvideos()
    console.log(data);
    setAllvideo(data)
  }
  useEffect(()=>{
    getUploadVideos()
    setDeleteVideoStatus(false);

  },[setUploadVideoServerResponse,deleteVideoStatus])

  console.log(allvideo);
  return (
    <>
      <Row>
      {
        allvideo?.length>0?
        allvideo.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
        ))
        : <p>nothing to display</p>
      }

    </Row>
    </>
  )
}

export default View