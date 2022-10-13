import React, { useState } from 'react'
import './Login.css'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';



const Login = () => {
   
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [name,setName] = useState()
    const [profilePic,setProfilPic] = useState()

    const loginToApp = (e)=>{
        e.preventDefault()
    }


const register=()=>{
    if(!name) return alert('please enter Name')
     createUserWithEmailAndPassword(auth,email,password)
     .then((userAuth)=>{
     
     })

}


  return (
    <div className='login'>
       
        <img src='rimage/lo.png' alt=''/>
        <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='full name' type='text'/>
        <input value={profilePic} onChange={(e)=>setProfilPic(e.target.value)} placeholder='profil Url' type='text'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' type='password'/>
        
        <button type='submit' onClick={loginToApp} >Sign In</button>
        </form>
        <p>Not a member ? {' '}
            <span className='login_register' onClick={register} >Register</span>
        </p>
      
        </div>
  )
}

export default Login