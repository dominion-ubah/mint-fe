import React from 'react';
import './Minichart.css'
const sm_c = require('../../assets/sm_c.svg');

export default function Minichart({value}) {
    return (
        <div className="c_mini_card w-100 d-flex mx-md-2 mb-2">
            <div>
            <p className="c_small_txt">Daily Transaction Volume</p>
    <p className="c_large_txt my-1">{value}</p>
            </div>
            <div className="ml-auto mr-4 mr-md-1">
                <img src={sm_c} alt="chart1" className="ml-4" />
            </div>
           
        </div>
    )
}
