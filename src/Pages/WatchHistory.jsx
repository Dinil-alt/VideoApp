import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allApi'

function WatchHistory() {
  
  const [history,setHistory]=useState([]);
  const handleHistory = async ()=> {
    // make api call 
    const {data} = await getAllHistory()
    console.log(data);
    setHistory(data);
  }

  const handleDeleteHistory = async(id)=>{
    await deleteHistory(id)
    handleHistory();
  }

  console.log("history",history);

  useEffect(()=> {
    handleHistory()
  },[])
  return (
    <div>
      <>
        <div className='table mt-5 mb-5 container'>
          <h3>Watch History</h3>
          <Link to={'/homes'} style={{textDecoration:'none'}}>
            Back to Home          
            </Link>
        </div>

        <table className='table mt-5 container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Timstrap</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length>0?history?.map((item,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td>{item?.timeStamp}</td>
                <td><button className='btn btn-danger' onClick={()=> handleDeleteHistory(item?.id)} >Remove</button></td>
              </tr>
            )): <p >nothing to display</p>
            }

          </tbody>
        </table>
      </>
    </div>
  )
}

export default WatchHistory