import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BRUSHES from "./pages/BRUSHES";
import Cart from "./pages/Cart";
import MAKEUP from "./pages/MAKEUP";
import Map from "./pages/Map";
import SKINCARE from "./pages/SKINCARE";
import TRENDING from "./pages/TRENDING";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import SingleItem from "./pages/SingleItem";
import Offer from "./pages/Offer";
import Wishlist from "./pages/Wishlist";
import Stores from "./pages/Stores";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import PersonalInfo from "./pages/PersonalInfo";
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          HOME
        </Route>
        <Route path="/makeup" element={<MAKEUP />}>
          MAKEUP
        </Route>
        <Route path="/brushes" element={<BRUSHES />}>
          BRUSHES
        </Route>
        <Route path="/skincare" element={<SKINCARE />}>
          SKINCARE
        </Route>
        <Route path="/trending" element={<TRENDING />}>
          TRENDING
        </Route>
        <Route path="/offers" element={<Offer />}>
          Offer
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/map" element={<Map />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single" element={<SingleItem />} />
        <Route path="/guestCheckout" element={<Map />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/personalinfo" element={<PersonalInfo/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
