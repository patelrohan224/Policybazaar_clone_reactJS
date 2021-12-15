import React from 'react'

export default function SelectBox({label,labelvalue}){

    return(
        <div  className="selectBox-r" onClick={()=>{
            labelvalue(label)
        }}>
            {label}
        </div>
    )
}