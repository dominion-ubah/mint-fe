import React from 'react';
import './Table.css'
import Select from 'react-select'
import StatusBtn from '../StatusBtn/StatusBtn';

const vw = require('../../assets/vw.svg');
const chev = require('../../assets/chev.svg');
const search_ico = require('../../assets/Search.svg');
const colourOptions = [
    { value: 'chocolate', label: 'All' },
    { value: 'strawberry', label: 'Reconcilled' },
    { value: 'd', label: 'Un-Reconcilled' },
    { value: 'es', label: 'Settled' },
    { value: 'as', label: 'Un-Settled' }
  ]

  const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "#ddd";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? "#F4F4F4"
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? "#F4F4F4"
            ? 'black'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : "#ddd"),
        },
      };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

export default function Table({}) {
    return (
        <div>
            <div>
                <div className="d-flex">
                    <div>
                    <p  className="c_tab_head_txt1 mr-md-5">Showing <span className="mx-4">20 </span> out of 500 payments</p>
                    </div>
                    <div className="d-flex">
                    <span><img className="mr-md-2" width="80%" src={search_ico} alt="search"/></span>
                        <input type="text" className="c_tab_form" alt="pay" placeholder="Search Payments" />
                    
                    </div>
                    <div className="d-flex ml-md-5"> 
                    <p className="c_tab_head_txt2">Show : </p><Select
    defaultValue={colourOptions[2]}
    label="Single select"
    options={colourOptions}
    styles={colourStyles}
  />
  {/* <input type="text" className="" alt="pay" placeholder="Search Payments" /> */}
                    </div>
                    
                    
                </div>
            </div>
            <div className="c_max_card w-100 mt-4">
                <div className="c_tb_head">
                    <div className="row">
                        <div className="col-md-4 ">
                            <p className="pl-3">Item Type</p>
                        </div>
                        <div className="col-md-2">
                            <p>Price</p>
                        </div>
                        <div className="col-md-2">
                            <p>Transaction</p>
                        </div>
                        <div className="col-md-1">
                            <p>Time</p>
                        </div>
                        <div className="col-md-3">
                            <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_green'} name={'Reconciled'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_green'} name={'Reconciled'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_yellow'} name={'Pending'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_green'} name={'Reconciled'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_yellow'} name={'Pending'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
                <div className="row c_table_detail border-bottom">
                    <div className="col-md-4 d-flex align-content-center py-3 " >
                            <img src={vw} alt="vw" width="10%" className="ml-2"/>
                            <p className="one mx-md-2 mt-3" >Apple Mac Book 15" 250 SSD 12GB</p>
                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">$73430</p>

                    </div>
                    <div className="col-md-2 mt-4">
                        <p className="pt-2">1234567890</p>

                    </div>
                    <div className="col-md-1 mt-4">
                        <p className="pt-2">12:30</p>

                    </div>
                    <div className="col-md-3 mt-4">
                        <StatusBtn status={'c_green'} name={'Reconciled'} />
                        <img src={chev} className="float-right mr-md-5 c_table_drop_ico" alt="btnl" width="5%" />
                    </div>
                </div>
            </div>
        </div>
    )
}
