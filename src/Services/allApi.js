import { api } from "./comonAPI"
import { serverUrl } from "./serverUrl"
export const uplaodVideo = async (reqBody) =>{
    // call POSt http request ti "http://localhost:4000/videos" to add video to json server and return response 
    
    return await api("POST",`${serverUrl}/videos`,reqBody)
}

// get all videos from json server 

export const getAllvideos= async()=>{

    // make get http request to "http://localhost:4000/videos" to get all video from json server to view component

    return await api("GET",`${serverUrl}/videos`,"")
}


// get a video from json server

export const getAvideo = async (id)=>{

    return await api("GET",`${serverUrl}/videos/${id}`,"")
}

//remove video from json server 
export const deleteVideo = async(id)=>{
    return await api("DELETE",`${serverUrl}/videos/${id}`,{})
}


export const addToHistory= async(videoDetails)=>{
     return await api("POST",`${serverUrl}/history`,videoDetails)
}

export const getAllHistory=async()=>{
    // make GET  "localHost:4000/videos" to get all videos from json server to view component
    return await api("GET", `${serverUrl}/history`,"")
}

export const deleteHistory = async(id)=>{
    return await api("DELETE",`${serverUrl}/history/${id}`,{})
}

//Add a category to JSON server
export const AddCategory=async(reqBody)=>{

    return await api("POST", `${serverUrl}/categories`,reqBody)
}
export const getAllCategory=async()=>{

    return await api("GET", `${serverUrl}/categories`,"")
}

export const  deleteCategory = async(id) =>{
    return await api("DELETE",`${serverUrl}/categories/${id}`,{})
}

export const  updateCategory = async(id,body) =>{
    return await api("PUT",`${serverUrl}/categories/${id}`,body)
}





