import axios from 'axios'

const BASE_URL=`http://localhost:3000/User`

export const RegisterAPI2=async(formdata)=>{
    const data=new FormData()
    for(let key in formdata){
        data.append(key,formdata[key])
    }
    try{
        const res=await axios.post(`${BASE_URL}/register`,data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const LoginAPI2=async(formdata)=>{
    try{
        const res=await axios.post(`${BASE_URL}/login`,formdata,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        })
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const Getusers2=async()=>{
    try{
        const res=await axios.get(`${BASE_URL}/getusers`)
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const GetUserbyIdAPI2=async(id)=>{
    try{
        const res=await axios.get(`${BASE_URL}/updateUser/${id}`)
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
}