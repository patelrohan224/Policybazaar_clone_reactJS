import React from 'react'

export default function SelectBox({label,labelvalue,flag}){

    return(
        <div  className="selectBox-r" onClick={()=>{
            labelvalue(label)
            setMakeflag(false)
        }}>
            {label}
        </div>
    )
}