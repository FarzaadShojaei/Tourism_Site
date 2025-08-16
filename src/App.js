import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [visitList, setVisitList] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    preferences: []
  });

  const addToVisitList = (destination) => {
    if (!visitList.find(item => item.id === destination.id)) {
      setVisitList([...visitList, destination]);
    }
  };

  const removeFromVisitList = (destinationId) => {
    setVisitList(visitList.filter(item => item.id !== destinationId));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                addToVisitList={addToVisitList}
                visitList={visitList}
              />
            } 
          />
          <Route 
            path="/destinations" 
            element={
              <Destinations 
                addToVisitList={addToVisitList}
                visitList={visitList}
              />
            } 
          />
          <Route 
            path="/destination/:id" 
            element={
              <DestinationDetail 
                addToVisitList={addToVisitList}
                visitList={visitList}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/profile" 
            element={
              <Profile 
                user={user}
                setUser={setUser}
                visitList={visitList}
                removeFromVisitList={removeFromVisitList}
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
