import { ADDBIKEDETAILS, ADDBIKENUMBER, BIKENUMFLAG } from "../actiontypes/NumBikeActiontypes"

export const numBikeflagfalse=()=>{
    return{
        type:BIKENUMFLAG
    }
}
export const addbikenum=(data)=>{
    return{
        type:ADDBIKENUMBER,
        payload:data
    }
}
export const addbikedetails=(data)=>{
    return{
        type:ADDBIKEDETAILS,
        payload:data
    }
}
