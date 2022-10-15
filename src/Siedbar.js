import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Siedbar.css";

const Siedbar = () => {
  //2
  const user = useSelector(selectUser);
  console.log('siedbar',user)

  //burada normalde { } parantey kullnilirdi amam ( ) bunu kulandi
  const recentItem = (topic) => (
    <div className="siedbar_recentItem">
      <span className="siedbar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="siedbar">
      <div className="siedbar_top">
        <img src='rimage/an.jpg' alt="" />
        <Avatar src={user.photoUrl} className="siedbar_avatar">{user.email[0]}</Avatar>
        {/** reduxtan once
             *  <img src='rimage/3.jpg' alt=''/>
             *   <h2>aaaaaa</h2>
            <h4>eeeeeeee</h4>
             */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="siedbar_stats">
        <div className="siedbar_stat">
          <p>who viewed</p>
          <p className="siedbar_statNumber">2,54</p>
        </div>
        <div className="siedbar_stat">
          <p>views on post</p>
          <p className="siedbar_statNumber">4,54</p>
        </div>
      </div>
      <div className="siedbar_bottom">
        <p>recent</p>
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Siedbar;
