import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Siedbar from "./Siedbar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'
import Widgets from "./Widgets";



//o;nce npx create-react-app . --template redux zaptik
//sonra firebase ayarlari zaorpik dosya actik orda cloud firestore acti
//databaesi acariy burada dikkat edilecek olan datanin yaninda rules yaiziyor burdeaki read write ve if yaziyor satir komunfa burdaki if sileriz
//en son redux duyenlemesi yaptim

function App() {
  const user = useSelector(selectUser);
//2
const dispatch = useDispatch()




  //2

 useEffect(()=>{
  onAuthStateChanged(auth,(userAuth)=>{
    if(userAuth){
      //user is logged in
  dispatch(login({
    email:userAuth.email,
    uid:userAuth.uid,
    displayName:userAuth.displayName,
    photoUrl:userAuth.photoURL
  }))
  
    }else{
      //user is logged out
       dispatch(logout())
    }
  
   })
  

 },[])


  //2
  

  return (
    <div className="App">
      {/** header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Siedbar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
