import React from "react";
import Header from "./Header";
import "./App.css";
import Siedbar from "./Siedbar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from "./Login";

//o;nce npx create-react-app . --template redux zaptik
//sonra firebase ayarlari zaorpik dosya actik orda cloud firestore acti
//databaesi acariy burada dikkat edilecek olan datanin yaninda rules yaiziyor burdeaki read write ve if yaziyor satir komunfa burdaki if sileriz
//en son redux duyenlemesi yaptim

function App() {
  const user = useSelector(selectUser);

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
        </div>
      )}
    </div>
  );
}

export default App;
