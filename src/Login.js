import React, { useState } from 'react'
import './Login.css'
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

import { nanoid } from 'nanoid'


const Login = () => {
   
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [name,setName] = useState()
    const [profilePic,setProfilPic] = useState()
//redux
//2
const dispatch = useDispatch()


    const loginToApp = (e)=>{
        e.preventDefault()
    }
//Bir kullanıcının profilini güncelleme
//Bir kullanıcının temel profil bilgilerini (kullanıcının görünen adı ve profil fotoğrafı URL'si) updateProfile yöntemiyle güncelleyebilirsiniz.
//2
const register=()=>{
    if(!name) return alert('please enter Name')
     createUserWithEmailAndPassword(auth,email,password)

  updateProfile(auth.userAuth,{
        displayName:name,
        photoURL:profilePic
       })
    
        dispatch(login({
            email:email,
            uid:nanoid(),
            displayName:name,
            photoURL:profilePic


        }))



     
   
        
   

 
     .catch((err)=>alert(err))
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