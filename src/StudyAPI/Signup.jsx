import React,{useState} from 'react'
import {useForm}from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {SignUpForm} from './Yup'
import {SignupAPI} from './Service/AuthService'
import UseAuth from './useAuth'
import {Link} from 'react-router-dom'

export default function Signup() {
    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        password:'',
        role:'',
        profile:null
    })
    const[message,setmessage]=useState('')
    const[error,seterror]=useState(false)
    const {login,user}=useAuth()
    const [visible,setVisible]=useState(true)

    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(SignUpForm)
    })

    const passhandle=()=>{
        setVisible(!false)
    }

    const handleChange=(e)=>{
        const {name,value,files}=e.target
        if(name==='profile'){
            setformdata((prev)=>({...prev,profile:files[0]}))
        } else{
            setformdata((prev)=>({...prev,[name]:value}))
        }
    }
    const onsubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await SignupAPI(formdata)
            console.log("Signup Sucess")
            await login(res.user)
            setmessage('Signup Successfull')
            seterror(false)
        }catch(err){
            console.log("error",err)
            setmessage("Something went wrong")
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit(onsubmit)}>
        {error && <p className="text-red-600">{error}</p>}
            <label className="block text-gray-600 font-semibold mb-1 tracking-wide">Name</label>
            <input
              type="text"
              {...register('name')}
              name="name"
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full mb-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800 placeholder:text-gray-400 transition-all duration-300"
            />
            <p className="text-red-600">{errors.name?.message}</p>

            <label className="block text-gray-600 font-semibold mb-1 tracking-wide">Email</label>
            <input
              type="email"
              {...register('email')}
              name="email"
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full mb-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800 placeholder:text-gray-400 transition-all duration-300"
            />
            <p className="text-red-600">{errors.email?.message}</p>

            <label className="block text-gray-600 font-semibold mb-1 tracking-wide">Password</label>
            <div className="relative mb-4">
              <input
                type={visible ? "text" : "password"}
                {...register("password")}
                name="password"
                autoComplete='off'
                value={formdata.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full mb-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800 placeholder:text-gray-400 transition duration-300"
              />
              <button
                type="button"
                onClick={passVisible}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 focus:outline-none"
              >
                {visible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password?.message && <p className="text-red-500">{errors.password.message}</p>}

            <label className="block text-gray-600 font-semibold mb-1 tracking-wide">Role</label>
            <select
              {...register('role')}
              name="role"
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800 mb-4"
            >
              <option value="">Select role</option>
              <option value="Tester">Tester</option>
              <option value="Developer">Developer</option>
              <option value="ProjectManager">Project Manager</option>
            </select>
            <p className="text-red-600">{errors.role?.message}</p>

            <label className="block text-gray-600 font-semibold mb-1 tracking-wide">Image</label>
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="profile"
                  className="cursor-pointer px-2 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
                  Choose File
                </label>
                <span className="text-sm text-gray-600">
                  {formdata?.profile?.name || 'No file chosen'}
                </span>
              </div>
              <input
                id="profile"
                type="file"
                {...register('profile')}
                name="profile"
                onChange={handleChange}
                className="hidden"
                accept="image/*"
              />
              {formdata?.profile && (
  <img
    src={URL.createObjectURL(formdata.profile)}
    alt="Profile Preview"
    className="w-24 h-24 object-cover rounded-full mt-2"
  />
)}
            </div>
            <p className="text-red-600">{errors.profile?.message}</p>

            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded shadow-md mt-6 transition-all duration-300 loginGradientBtn"
            >
              SignUp
            </button>
            {message && <p className="mt-3 text-center text-green-600">{message}</p>}

            <Link
              to="/"
              className="block text-sm text-blue-600 mt-4 text-center hover:underline"
            >
              Already have an account? Login
            </Link>
          </form>
    </>
  )
}
