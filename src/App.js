import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Minichart from './components/Minichart/Minichart';
import Largechart from './components/Largechart/Largechart';
import Orderchart from './components/Orderchart/Orderchart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="border c_contain">
          {/* MiniCharts */}
          <div className="d-flex justify-content-between px-0 mx-0 my-4">
            <Minichart value={"2,342"}/>
            <Minichart value={"₦4,000,000"}/>
            <Minichart value={"452,000"}/>
            <Minichart value={"₦4,000,000"}/>
          </div>
          <div className="d-flex">
              <div>
                <Largechart />
              </div>
              <div className="border-left flex-fill mx-0 px-0">
                <Orderchart header={"Orders"}title_one={"Pending Orders:"} title_two={"Reconcilled Orders:"} title_three={"Total Orders:"} />
                <Orderchart header={"Payments"} title_one={"Un-Reconcilled Payments"} title_two={"Reconcilled Payments"} title_three={"Total Payments"} />
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
