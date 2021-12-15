import { ADDBIKEDETAILS, ADDBIKENUMBER, BIKENUMFLAG } from "../actiontypes/NumBikeActiontypes";

const init={
    isbikeno:false,
    bikenum:"",
    bikemake:"",
    bikemodel:"",
    bikeyear:""
  };
export const numBikeReducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADDBIKENUMBER:
            return {...state,bikenum:payload,isbikeno:true};
        case BIKENUMFLAG:
            return {...state,bikenum:"",isbikeno:false}
        case ADDBIKEDETAILS:
            return {...state,bikemake:payload.make,bikemodel:payload.model,bikeyear:payload.year}
        default:
            return {...state}
    }
}