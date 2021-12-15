import React, { useState } from 'react';

import {TextField,Button,Box} from "@mui/material"
import "./Twheel.css"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addbikenum } from '../../Redux/actions/NumBikeation';
import SelectBox from "./SelectBox"

const makedata=[
    "HONDA",
    "BAJAJ",
    "HERO HONDA",
    "TVS",
    "YAMAHA",
    "HERO",
    "SUZUKI",
    "ROYAL ENFIELD"
    ,"MAHINDRA",
    "KTM",
    "LML",
    "HARLEY DAVIDSON"
]
const yeardata=[
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014"
    ,"2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007"
    ,"2006"
]
const modeldata=[
    "ACTIVA",
    "CB SHINE",
    "CB UNICORN",
    "AVATOR",
    "DIO",
    "DREAM YUGA",
    "SHINE",
    "UNICRON"
    ,"CB TWISTER",
    "ACTIVA-L",
    "CB 350 RS",
    "CRF 1000L",
    "HNESS",
    "HORNET 2.0",
    "SP"
    ,"X-BLADE"
]

export default function Twheelmake(){
    const [bikemake,setBikemake]=useState("")
    const [bikemodel,setBikemodel]=useState("")
    const [year,setYear]=useState("")
    const [makeflag,setMakeflag]=useState(false)
    const [modelfalg,setModelflag]=useState(false)
    const [yearflag,setYearflag]=useState(false)
    const dispatch=useDispatch()
    const history=useHistory()
    const bikenum=useSelector(state=>state.vehicledetail.bikenum)


    function RedBar() {
        return (
          <Box
            sx={{
              height: 20,
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgb(255 132 132 / 25%)',
            }}
          />
        );
      }
    return(
        <div className="container-r">
            <div className="bikeno-conti-r">
                <div className="bikeno-img-r">
                    <img className="bikeno-img-i-r" src="./Images/numBike/Logo (1).svg" alt="" />
                    {/* <img className="bikeno-img-aki-r" src="./Images/numBike/image 2.svg" alt="" /> */}          
                    <div className="bikedetail-r-inpt">
                        <h4 className="h4-modeldetail-r">
                        Your Vehicle Details
                        </h4>
                  
                    <TextField  style={{width: '92%'}}
                        id="standard-error-helper-text"
                        label="Bike Number"
                        value={bikenum}
                        variant="outlined"
                        // required 
                     /> 
                     <RedBar />
                    <TextField style={{width: '92%'}}
                        error={makeflag}
                        id="standard-error-helper-text"
                        label={makeflag ? "error" :"Select Make"}
                        placeholder='Select Make'
                        value={bikemake}
                        // helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                    />
                      <RedBar /> 
                    <TextField style={{width: '92%'}}
                        error={modelfalg}
                        id="standard-error-helper-text"
                        label={modelfalg ? "error" :"Select Model/Variant"}
                        placeholder='Select Make'
                        value={bikemodel}
                        // helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                    />
                      <RedBar /> 
                    <TextField style={{width: '92%'}}
                        error={yearflag}
                        id="standard-error-helper-text"
                        label={yearflag ? "error" :"Select Ragistation Year"}
                        placeholder='Select Ragistation Year'
                        value={year}
                        // helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                    />
                      <RedBar />
                      <div className="modelbtn-r">
                    <Button  style={{width: '92%'}}  
                    variant="contained" >GET QOUTES</Button>
                    </div> 
                    </div>
                </div>
                
                <div className="bikeno-model-r">
               {makeflag ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select two wheeler model</p>
                           <div className="items-grid-r">
                            {makedata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemake} />
                            ))}
                           </div>
                       </div> : modelfalg ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select two wheeler model</p>
                           <div className="items-grid-r">
                            {modeldata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemodel} />
                            ))}
                           </div> 
                        </div>: yearflag ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select two wheeler model</p>
                           <div className="items-grid-r">
                            {yeardata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setYear} />
                            ))}
                           </div> 
                       </div> : <div></div>}

            </div>
            <div  className="p_div_descriotop_r">
                <p className="description_nu-r">
                    Disclaimer:
                    All savings provided by insurers as per IRDAI approved insurance plans. Standard T&C apply.
                    Actual time for transaction may vary subject to additional data requirements and operational processes.
                    Policybazaar Insurance Brokers Private Limited (formerly known as Policybazaar Insurance Web Aggregator Private Limited)
                    CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana – 122001) Policybazaar is now registered as a Direct Broker
                    Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General)
                    Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and
                    solely based on the information received from the insurers.
                </p>
            </div>
        </div>
    )
}