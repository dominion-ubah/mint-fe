import React from 'react';
import './StatusBtn.css'
import '../../App.css'

export default function StatusBtn({status, name}) {
    return (
        <div className="c_btn_circle">
            <div className={"c_circle "} style={{backgroundColor:((status==="c_yellow")?"#FDC203":"#27AE60")}}></div>
<p className={status}>{name}</p>
        </div>
    )
}
