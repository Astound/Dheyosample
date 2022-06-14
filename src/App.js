import './App.css';
import Mid from './Components/Mid';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Orders from './Components/Orders';
import Ssellers from './Components/Ssellers';
import Rviewed from './Components/Rviewed';
import Analytics from './Components/Analytics';
import Wlist from './Components/Wlist';
import Wallet from './Components/Wallet';
import Searchresults from './Components/Searchresults';
import Cart from './Components/CartComps/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Payment from './Components/CartComps/Payment';
import Payprocess from './Components/CartComps/Payprocess';
function App() {
  return (
    <div className="App">
      <div className="layout text-white">
        <Router>     
        <div className="nav bg-black flex py-4 justify-between self-center"><Navbar/></div>
        <div className="sidebar rounded-sm  bg-black "><Sidebar/></div>
        <div className="mid">
          <Routes>
          <Route exact path="" element={<Mid/>}/>
          <Route exact path="/search" element={<Searchresults/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/Cart/payment" element={<Payment/>}/>
          <Route exact path="/Cart/paymentprocess" element={<Payprocess/>}/>
          <Route exact path="/Orders" element={<Orders/>}/>
          <Route exact path="/Ssellers" element={<Ssellers/>}/>
          <Route exact path="/Rviewed" element={<Rviewed/>}/>
          <Route exact path="/Analytics" element={<Analytics/>}/>
          <Route exact path="/Wlist" element={<Wlist/>}/>
          <Route exact path="/Wallet" element={<Wallet/>}/>
        </Routes>
          </div>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
