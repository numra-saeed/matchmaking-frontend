import React from 'react';
import './App.css';
import DashboardUser from './components/dashboard-user/Dashboard-User';
import Login from './components/login/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardAdmin from './components/dashboard-admin/Dashboard-Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <header className='header'>Talent Matchmaking System</header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard-user" element={<DashboardUser />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          </Routes>
        </div>

      </Router>


    </div>
  );
}

export default App;
