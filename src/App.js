import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Minichart from './components/Minichart/Minichart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="border c_contain">
          {/* MiniCharts */}
          <div className="d-flex my-4">
            <Minichart value={"2,342"}/>
            <Minichart value={"₦4,000,000"}/>
            <Minichart value={"452,000"}/>
            <Minichart value={"₦4,000,000"}/>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
