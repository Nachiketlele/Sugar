import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BRUSHES from './pages/BRUSHES';
import MAKEUP from './pages/MAKEUP';
import SKINCARE from './pages/SKINCARE';
import TRENDING from './pages/TRENDING';



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
      </Routes>
    </div>
  );
}

export default App;
