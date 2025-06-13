import axios from 'axios'

const BASE_URL='http://localhost:3000/BugHound'

export const SignupAPI=async(AuthData)=>{
    try{
        const data=new FormData()
        for(let key in AuthData){
            data.append(key,AuthData[key])
        }
        const res=await axios.post(`${BASE_URL}/signup`,data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
        )
        return res.data
    }catch{
        console.log("error",err)
        throw err
    }
}