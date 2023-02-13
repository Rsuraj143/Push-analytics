
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Setting from './Pages/Setting';
import DailyFlash from './Pages/DailyFlash';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dailyFlash' element={<DailyFlash/>} />
        <Route path='/setting' element={<Setting/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
