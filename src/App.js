import React from 'react';
import AppHeader from './appHeader/appHeader';
import AppMenu from './appMenu/appMenu';
import AppFooter from './appFooter/appFooter';
import AppSetting from './appSetting/appSetting';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './components/DashBoard';
import Crud from './pages/Crud'


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DashBoard />}/>
        <Route path="/crud" element={<Crud />}/>
      </Routes>
    </div>
  )
}

export default App;
