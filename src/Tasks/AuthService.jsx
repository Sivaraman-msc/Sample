import axios from 'axios'

const BASE_URI = 'http://localhost:3000/Task/'

export const SignUpTaskService = async (formdata) => {
    try {
        const data = new FormData()
        for (let key in formdata) {
            data.append(key, formdata[key])
        }

        const res = await axios.post(BASE_URI, data,{headers:{'Content-Type':'multipart/form-data'}})

        return res.data
    }catch(err){
        console.log(err)
    }
}

export const LoginTaskService=async(data)=>{
    try{
        const res=await axios.post(`${BASE_URI}/login`,data)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const GetDataTaskService=async(data)=>{
    try{
        const res=await axios.get(BASE_URI,{withCredentials:true})
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const GetByIdTaskService=async(id,data)=>{
    try{
        const res=await axios.get(`${BASE_URI}/${id}`,data,{withCredentials:true})
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const UpdateTaskService=async(id,UpdateData)=>{
    try{
        const data=new FormData()
        for(let key in UpdateData){
            data.append(key,UpdateData[key])
        }
        const res=await axios.put(`${BASE_URI}/${id}`,data)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const DeleteTaskService=async(id,data)=>{
    try{
        const res=await axios.delete(`${BASE_URI}/${id}`,data)
        return res.data
    }catch(err){
        console.log(err)
    }
}