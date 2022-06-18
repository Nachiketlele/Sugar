import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BRUSHES from './pages/BRUSHES';
import Cart from './pages/Cart';
import MAKEUP from './pages/MAKEUP';
import Map from './pages/Map';
import SingleItem from './pages/SingleItem';
import SKINCARE from './pages/SKINCARE';
import TRENDING from './pages/TRENDING';
import Wishlist from './pages/Wishlist';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>HOME</Route>
        <Route path='/makeup' element={<MAKEUP/>}>MAKEUP</Route>
        <Route path='/brushes' element={<BRUSHES/>}>BRUSHES</Route>
        <Route path='/skincare' element={<SKINCARE/>}>SKINCARE</Route>
        <Route path='/trending' element={<TRENDING/>}>TRENDING</Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/single' element={<SingleItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
