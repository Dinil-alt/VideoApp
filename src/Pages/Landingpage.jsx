import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header';
function Landingpage() {
  const navigateByUrl= useNavigate();

  return (
    <>
    <Row className='pt-5 pb-5 mt-5 align-item-center justify-content-between w-100 bg-black' >
      <Col></Col>
      <Col lg={4}><h3 className='text-white'>Welcome to <span className='text-success'>watchIt</span></h3>
      <p className='text-white'> watchIt can be used to play audio and video files and can help users organize their multimedia collection. In this, users can even categorize the videos according to their choices.</p>
      <Button className='btn btn-success' onClick={()=>navigateByUrl('/Homes')} > Get Started </Button>
      </Col>
      <Col lg={6}>
        <img className='img-fluid align-item-center justify-content-center' style={{height: '300px', marginLeft:'40%',borderRadius:'20px'}} src="https://i.pinimg.com/originals/0a/e6/d6/0ae6d6b90d8f455ce7f742ff1887d714.gif" alt="Failed to load" />
      </Col>
      <Col></Col>
    </Row>

    <Row className='w-100' style={{justifyContent:"space-evenly", margin:"20px"}}>
      <h3 style={{textAlign:"center"}}>Features</h3>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"200px" , paddingTop:"12px", background:'black' }} variant="top" src="https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif" />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Save Videos</Card.Title>
        <Card.Text>
          Any videos can be saved within the application and can be opened from their itself.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif" />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Managing</Card.Title>
        <Card.Text>
          Can easily manage videos according to users choices.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/7s3p.gif" />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Categorized Videos</Card.Title>
        <Card.Text>
          Can easily categorize videos based users choice.
        </Card.Text>
      </Card.Body>
    </Card>

    </Row>
    <Row className='mb-5 w-100'  >
      <Col></Col>
      <Col lg={5} className='p-5'>
        <h4><b>Simple,Fast and Powerful</b></h4>
        <p><spam className="text-warning">Play History: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
        <p><spam className="text-warning">Categorize Videos: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
        <p><spam className="text-warning">Managing History: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
      </Col>
      <Col className='p-5' lg={5}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KJwYBJMSbPI?si=i3pEyP74Ke41N_Nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
      <Col></Col>

    </Row>
    </>
  )
}

export default Landingpage