
import React, { useState } from "react"
import { Register } from "./register"
import axios from "axios"


export const Login = () => {
    const [switchTab , setSwitchTab] = useState(false)
    const [name , setName] = useState('')
    const [password ,setPassword] = useState('')
    const [login ,setLogin] = useState(false)

    const configuration = {
        method: "post",
        url: "http://localhost:4000/user/login",
        data: {
          name,
          password,
        },
      };

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios(configuration)
        .then((result) => {
            alert(result.data.message)
            setLogin(true)
            console.log(result);
        })
        .catch((error) => {
            alert(error.message)
            console.log(error);})   
    }




    return   <div class="flex items-center min-h-screen bg-gray-50">
    <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
                <img class="object-cover w-full h-full" 
                src={login ? "https://img.freepik.com/premium-vector/set-hand-drawn-various-faces-shapes-doodle-objects-abstract-contemporary-modern-vector-illust_250257-1693.jpg" 
                :"https://img.freepik.com/free-vector/flat-design-youth-people-pattern_23-2148202773.jpg?w=2000"}
                    alt="img" />
            </div> 
            <div class="flex items-center justify-center  md:w-1/2">
                <div class="w-full">
                <div className="text-purple-900 text-start  sm:px-12 sm:mt-7">
                    <h1 class=" text-2xl font-bold ">
                      {switchTab ? "  Create Account" : "Login to Your Account"} 
                       
                    </h1>
                    <p className="text-[14px] text-gray-500">
                          {switchTab ? "create you account for get access" 
                          : " login with your existing account or" }
                           <br></br>
                             <label className="text-purple-900 font-medium">
                                <a onClick={()=>{setSwitchTab(!switchTab)}} href="#">
                              {switchTab ? " I already have account"  : "I don't have account" } 
                                </a>
                             </label>
                        </p>
                    </div>
                    {switchTab ? <Register></Register> :
                    <div className="sm:py-8 sm:px-12">
                    <div>
                        <label class="block my-2 text-start text-sm font-semibold">
                            Username
                        </label>
                        <input type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            class="w-full px-4 py-2
                             text-sm border rounded-sm
                              focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                             />
                    </div>
                    <div>
                        <label class="block my-2 text-start text-sm font-semibold ">
                            Password
                        </label>
                        <input
                            name="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            type="password" 
                            class="w-full px-4 py-2 text-sm border rounded-sm 
                            focus:border-blue-400 focus:outline-none focus:ring-1
                             focus:ring-blue-600"
                            />
                    </div>
                    <p class="mt-4 text-start font-medium">
                        <a class="text-sm text-purple-900  text-blue-600 hover:underline" href="./forgot-password.html">
                            Forgot your password?
                        </a>
                    </p>
             <button
             type="submit"
             onClick={handleSubmit}
                        class="block w-full px-4 py-2 mt-4 
                        text-sm font-medium leading-5 text-center 
                        text-white transition-colors duration-150
                         bg-purple-700 border border-transparent rounded-sm 
                         active:bg-blue-600 hover:bg-blue-700 focus:outline-none 
                         focus:shadow-outline-blue"
                        href="#">
                        Log in
                    </button>
                    <hr class="my-8" />
                    <div class="flex items-center justify-center gap-4">
                        <button
                            class="flex text-purple-900 items-center justify-center w-full
                             px-4 py-2 text-sm  border
                              border-gray-300 rounded-sm font-semibold hover:border-gray-500 focus:border-gray-500">
                            <svg className="mx-2"
                             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#039be5"
                             d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                            <path fill="#fff" 
                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            Facebook
                        </button>
                        <button
                            class="flex items-center
                             justify-center text-purple-900 font-semibold w-full px-4 py-2
                              text-sm 
                              border border-gray-300 rounded-sm hover:border-gray-500 focus:border-gray-500">
                                <svg className="mx-2"
                                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" 
                                viewBox="0 0 48 48">
                                <path fill="#fbc02d"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                            	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
                                	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            </svg>
                                Google
                        </button>
                    </div>
                    </div>

}
                </div>

            </div>

        </div>
    </div>
</div>
}