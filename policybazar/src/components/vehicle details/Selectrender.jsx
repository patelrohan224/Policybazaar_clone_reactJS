import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
export default function Selectrender({setflag,data,label}){
    useEffect(() =>{

    },[data])
return(<Autocomplete
    disablePortal
    id="combo-box-demo"
    options={data}
    sx={{ width: "100%" }}
    value={""}
    renderInput={(params) => <TextField {...params} 
    onSelect={(e)=>{setflag(e.target.value)}}
      label={label} />}
    />)
}