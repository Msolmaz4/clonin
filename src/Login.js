import React, { useState } from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";

import { nanoid } from "nanoid";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [profilePic, setProfilPic] = useState();
  console.log('login',name)
  //redux
  //2
  const dispatch = useDispatch();
//login yaparken user unut ma bu redux karsilik
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL
      }))
    
    })
    .catch(err=>alert(err))
  };
  //Bir kullanıcının profilini güncelleme
  //Bir kullanıcının temel profil bilgilerini (kullanıcının görünen adı ve profil fotoğrafı URL'si) updateProfile yöntemiyle güncelleyebilirsiniz.
  //2
  const register = () => {
    if (!name) return alert("please enter Name");
    createUserWithEmailAndPassword(auth, email, password);
    //update icin 2
    updateProfile(auth.userAuth, {
      displayName: name,
      photoURL: profilePic,
    });
    //baglanti2
    dispatch(
      login({
        email:email,
        uid: nanoid(),
        displayName: name,
        photoUrl: profilePic,
      })
    ).catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img src="rimage/lo.png" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilPic(e.target.value)}
          placeholder="profil Url"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login_register" onClick={register}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
