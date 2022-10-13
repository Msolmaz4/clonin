import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import { collection, onSnapshot,serverTimestamp,addDoc } from "@firebase/firestore";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  //  db.collection('posts') burda kendimiy yaptik
  //Referans, yalnızca veritabanınızdaki bir konuma işaret eden hafif bir nesnedir. Orada veri bulunsun veya
  ////bulunmasın bir referans oluşturabilirsiniz ve referans oluşturmak herhangi bir ağ işlemi gerçekleştirmez.
  //Ayrıca koleksiyonlara referanslar da oluşturabilirsiniz:

  //onSnapshot() yöntemiyle bir belgeyi dinleyebilirsiniz . Sağladığınız geri aramayı kullanan ilk arama, tek belgenin mevcut içeriğiyle birlikte anında bir belge anlık görüntüsü oluşturur. Ardından, içerik her değiştiğinde, başka bir arama belge anlık görüntüsünü günceller.

  //setpost heran gince.l.emek icin doc maplaeyim anlik takip
  //documanlara bakaram yaptik https://www.youtube.com/watch?v=rfQ2F8kQEUg
/**
 * setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
 */


  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc)=>doc.data()))
    });
  }, []);

  
//serverstamp yamani kayedere
  const sendPost = async (e) => {
    e.preventDefault();

    try {

     await addDoc(collection(db, "posts"), {
            name:'sonny',
            description:'test',
            message:input,
            photoUrl:'',
            timestamp:serverTimestamp()
          });
         
          
    } catch (e) {
        console.error("Error adding document: ", e);

    }


/**
 * db.collection('posts').add({
        name:'sonny',
        description:'test',
        message:input,
        photoUrl:'',
        timestamp:serverTimestamp()
    })
 */

    
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="WriteArt"
            color="#7FC15E"
          />
        </div>
      </div>
      {/**POST */}
{/**basta yukaridda formul yayilir
 * sonra burda duyenlem yapilir
 * {posts.map((post) => (
        <Post />
      ))}

{id,data:{name,description,message,photoUrl}}

 */}
      {posts.map((dad) => (
        <Post 
        key={dad.id}
        name={dad.name}
        description={dad.description}
        message={dad.message}
        photoUrl={dad.photoUrl}
        />
      ))}
   
    </div>
  );
};

export default Feed;
