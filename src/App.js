import React, {useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Sidebar from './components/Sidebar/Sidebar';
import Minichart from './components/Minichart/Minichart';
import Largechart from './components/Largechart/Largechart';
import Orderchart from './components/Orderchart/Orderchart';
import Table from './components/Table/Table';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenSideA = (a) => {
    console.log('sd', a)
    setIsOpen(a)

  }
  return (
    <div className="app">
      <NavigationBar setIsOpenSideAR={setIsOpenSideA}/>
      <div className={isOpen?"d-flex":""}>
        <Sidebar isOpened={isOpen}/>
        <div className=" w-100 c_contain mx-2 mx-md-3">
          <div  className="c_contain_scroll">
          {/* MiniCharts */}
          <div className="d-flex justify-content-between flex-column flex-md-row px-0 mx-0 my-4">
            <Minichart value={"2,342"}/>
            <Minichart value={"₦4,000,000"}/>
            <Minichart value={"452,000"}/>
            <Minichart value={"₦4,000,000"}/>
          </div>
          <div className="d-flex flex-column flex-md-row">
              <div>
                <Largechart />
              </div>
              <div className="border-left flex-fill mx-0 px-0">
                <Orderchart header={"Orders"}title_one={"Pending Orders:"} title_two={"Reconcilled Orders:"} title_three={"Total Orders:"} />
                <Orderchart header={"Payments"} title_one={"Un-Reconcilled Payments"} title_two={"Reconcilled Payments"} title_three={"Total Payments"} />
              </div>
          </div>

          <div className="">
            <p className="maxive_txt mt-4">Payments</p>
            <Table />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
