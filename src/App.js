import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;