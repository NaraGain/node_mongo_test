import React, { useEffect, useState } from "react";
import axios from "axios"


export const Register = (tab) => {
const [switchTab ,setSwitchTab] = useState(tab)
const [post , setPost] = useState([])
const [name, setusername] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [confirm, setconfirm] = useState('')

const configuration = {
    method: "post",
    url: "http://localhost:4000/user/register",
    data: {
        name,
        email,
        password,
        confirm
    },
  };

const handleSubmit = (e)=>{
    e.preventDefault()
    axios(configuration)
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);})
    alert("create sucessfully")
}

    return <div>
                
    {/* <div className="text-purple-900 text-start  sm:px-12 sm:mt-7">
        <h1 class=" text-2xl font-bold ">
           Create Account
           
        </h1>
        <p className="text-[14px] text-gray-500">
        create you account for get access <br></br>
         <label className="text-purple-900 font-medium">
                    <a onClick={()=>setSwitchTab(false)} href="#">
                   I already have account
                    </a>
                 </label>
            </p>
        </div> */}
        <div className=" sm:px-12 sm:py-7">
            <div className="flex gap-4">
            <div>
            <label class="block my-2 text-start text-sm font-semibold">
                Username
            </label>
            <input type="text"
                name="name"
                value={name}
                onChange={(e)=> setusername(e.target.value)}
                className="w-full px-4 py-2
                 text-sm border rounded-sm
                  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="" />
        </div>
        <div>
            <label class="block my-2 text-start text-sm font-semibold">
                Email
            </label>
            <input 
            type="email"
            name="email"
            value={email}
            onChange={(e)=> setemail(e.target.value)}
                className="w-full px-4 py-2
                 text-sm border rounded-sm
                  focus:border-blue-400 focus:outlfine-none focus:ring-1 focus:ring-blue-600"
                placeholder="" />
        </div>
            </div>
        <div className="flex gap-4 my-2">
            <div>
            <label className="block my-2 text-start text-sm font-semibold">
               Password
            </label>
            <input 
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
                className="w-full px-4 py-2
                 text-sm border rounded-sm
                  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="" />
        </div>
        <div>
            <label class="block my-2 text-start text-sm font-semibold">
              confirm password
            </label>
            <input 
            type="password"
            name="confirm"
            value={confirm}
            onChange={(e)=> setconfirm(e.target.value)}
                className="w-full px-4 py-2
                 text-sm border rounded-sm
                  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="" />
        </div>
            </div>
        <p class="mt-4 text-start  font-medium">
            <a class="text-sm text-purple-900  text-blue-600 hover:underline" href="./forgot-password.html">
               I agreen
            </a>
        </p>
 <button type="submit"   onClick={handleSubmit}
            className="block w-full px-4 py-2 mt-4 
            text-sm font-medium leading-5 text-center 
            text-white transition-colors duration-150
             bg-purple-700 border border-transparent rounded-sm 
             active:bg-blue-600 hover:bg-blue-700 focus:outline-none 
             focus:shadow-outline-blue"
            href="#">
            Create Account
        </button>
        <hr className="my-8" />
        <div class="flex items-center justify-center gap-2 text-[12px]">
            <button
                class="flex text-purple-900 items-center justify-center w-full
                 px-1 py-2  border
                  border-gray-300 rounded-sm font-semibold hover:border-gray-500 focus:border-gray-500">
                <svg className="mx-2"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                <path fill="#039be5"
                 d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                <path fill="#fff" 
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg>
                    Login with Facebook
            </button>
            <button
                class="flex items-center
                 justify-center text-purple-900 font-semibold w-full px-2 py-2
                  
                  border border-gray-300 rounded-sm hover:border-gray-500 focus:border-gray-500">
                    <svg className="mx-2"
                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" 
                    viewBox="0 0 48 48">
                    <path fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                    s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
                        l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                   Login with Google
            </button>
        </div>
        </div>
    </div>
}