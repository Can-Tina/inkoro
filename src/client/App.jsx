import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Saved from './pages/Saved';
import Explore from './pages/Explore';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/saved' element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;