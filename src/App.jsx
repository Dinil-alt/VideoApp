import './App.css';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landingpage from './Pages/Landingpage';
import WatchHistory from './Pages/WatchHistory';
import { Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Homes from './Pages/Homes';
function App() {
  return (
    <div className="App">
        <h1 className='ms-2' style={{fontFamily:'Times new roman',fontWeight:'bolder'}}>Video Player</h1>
        <Routes>
          <Route path ="/" element={<Landingpage/>}/>
          <Route path ="/Homes" element={<Homes/>}/>
          <Route path ="/WatchHistory" element={<WatchHistory/>}/>
        </Routes>
       <Footer></Footer>
        
    </div>
  );
}

export default App;
