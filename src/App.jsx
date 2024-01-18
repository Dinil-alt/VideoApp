import './App.css';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landingpage from './Pages/Landingpage';
import WatchHistory from './Pages/WatchHistory';
import { Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Homes from './Pages/Homes';
import Header from './Components/Header';
function App() {
  return (
    <div className="App ">
      <Header/>
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
