import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import Join from './pages/join';
import Contact from './pages/contact';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
