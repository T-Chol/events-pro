import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import RegisterPage from './components/RegisterPage';
import BookingPage from './components/BookingPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import LoginPage from './components/LoginPage'; //protected page
import UserProfile from './components/UserProfile'; //protected page
import OrderHistory from './components/OrderHistory'; //protected page
import Settings from './components/Settings'; //protected page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProtectedRoute component={UserProfile} />} />
        <Route path="/book" element={<ProtectedRoute component={BookingPage} />} />
        <Route path="/orders" element={<ProtectedRoute component={OrderHistory} />} />
        <Route path="/settings" element={<ProtectedRoute component={Settings} />} />
      </Routes>
    </Router>
  );
}

export default App;
