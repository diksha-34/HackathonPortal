import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner'; 
import UpcomingEvenets from './components/UpcomingEvenets';
import Session from './components/Session';
import Mainpage from './components/Mainpage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upcomingevents" element={<UpcomingEvenets />} /> 
        <Route path="/Session" element={<Session />} /> 
        <Route path="/" element={<Banner />} />
        <Route path="/Mainpage" element={<Mainpage />} /> 
      
      </Routes>
    </Router>
  );
}

export default App;
