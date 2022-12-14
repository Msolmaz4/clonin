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
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  orderBy,
  query,
} from "@firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";


import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Feed = () => {
  //2
  const user = useSelector(selectUser);

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
  //burda en son yazilani yukarida tutmak icin orderBz komutu var firebas de  basta en temel hali onSnapten
  /**
 *   useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc)=>doc.data()))
    });
  }, []);
  bundan sonra oderBy yaptim buraya kadar on numara 
 */

  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  //serverstamp yamani kayedere
  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });

      setInput("");
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
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                type="submit"
                onClick={sendPost}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Stack>
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
