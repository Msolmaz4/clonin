import React from 'react';
import Header from './Header';
import './App.css';
import Siedbar from './Siedbar';
import Feed from './Feed';



//o;nce npx create-react-app . --template redux zaptik 
//sonra firebase ayarlari zaorpik dosya actik orda cloud firestore acti
//databaesi acariy burada dikkat edilecek olan datanin yaninda rules yaiziyor burdeaki read write ve if yaziyor satir komunfa burdaki if sileriz

function App() {
  return (
    <div className="App">
     {/** header */}
     <Header/>
     {/** deneme */}
     <div className='app_body'>
     <Siedbar/>
     {/**feed */}
     <Feed/>
     </div>
    
    </div>
  );
}

export default App;
