import React, { useState } from 'react'
import Add from '../Components/Add'
import {Link} from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'
function Homes() {
  const [uploadVideoServerRequest,setUploadVideoServerRequest] = useState({})
  return (
    <>
    <div className="Container mt-5 mb-5 d-flex justify-content-between align-item-center ">
      <div className='add-videos'>
        <Add setUploadVideoServerRequest={setUploadVideoServerRequest}/>
        <Link to={'/watchHistory'} style={{textDecoration:'none',color:'blue'}} className='ms-2'>Watch History</Link>
      </div>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex  justify-content-between align-item-center'>
      <div className="all-videos">
        <h3>All Videos</h3>
        <View setUploadVideoServerRequest={setUploadVideoServerRequest}/>
      </div>
      <div className='category col-lg-3'>
        <Category/>

      </div>

    </div>
    
    </>
  )
}

export default Homes