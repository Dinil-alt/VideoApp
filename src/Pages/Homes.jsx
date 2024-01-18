import React, { useState } from 'react'
import Add from '../Components/Add'
import {Link} from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'
import { Row } from 'react-bootstrap'
function Homes() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
    <div className="Container mt-5 mb-5 d-flex justify-content-between align-item-center ">
        <div><Add setUploadVideoServerResponse={setUploadVideoServerResponse}/></div>
        <div><Link to={'/watchHistory'} style={{textDecoration:'none',color:'blue',fontFamily:'times new roman',fontSize:'22px', fontWeight:'500'}} className='me-3 '>Watch History</Link></div>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex  justify-content-between align-item-center'>
      <div className="all-videos">
        <h3>All Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      <div className='category col-lg-3'>
        <Category/>

      </div>

    </div>
    
    </>
  )
}

export default Homes