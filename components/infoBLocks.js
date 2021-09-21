import * as React from 'react';
import { FcLock } from 'react-icons/fc';
import { FaCcVisa, FaCcMastercard, FaApplePay } from "react-icons/fa";
import Stars from './stars.js';
import PriceBox from './priceBox.js';
import CountdownTimer from './countdownTimer.js';
import Products from './products.js';

const InfoBlocks = (props) => {

    const [cart, setCart] = React.useState([]);
    const [formattedCart, setFormatted] = React.useState([]);

    const [validValues,setValidValues] =React.useState([]);

    React.useEffect(() => {
        checkValue(cart);
    },[cart]);

    const checkValue = (arr) => {
        if(arr.length){

            let arrLength = arr.length;
            let lastObj = arr[arrLength-1];
            if(arr.length === 1){
                setValidValues([arr[0]]);
                // setCart(formatted);
            }else{
               formatt(validValues, lastObj); 
            }
        }
    }

    const formatt = (validArr, lastObj) => {

        
        let length = validArr.length;
        if(length === 1){
           if(validArr[0].id === lastObj.id){
               setValidValues(lastObj);
           }else{
               setValidValues(...validValues, lastObj);
           }
        }
        // if(validArr[0].id === lastObj.id){
        //     
        // }else{
        //     setValidValues(...validValues, lastObj);
        // }
     
        // for(let i=0;i<length;i++){
        //     // if(validArr[i].id)
        //     console.log("ITEM", validArr[i].id)
        // }


        // if(arr.length){
        //     let arrLength = arr.length;
        //     let lastID = arr[arrLength-1].id;
        //     console.log("last",lastID);
    
        //     if(arr.length === 1){
        //         formatted.push(arr[0]);
        //         // setCart(formatted);
        //     }
    
        //     if(arr.length === 2){
        //         if(arr[arrLength-1].id === arr[arrLength-2].id){
        //             formatted.push(arr[arrLength-1]);
        //         }
        //     }
    
        //     if(arr.length >=3){
        //         for(let i=0; i<2;i++){
        //             if(arr[i].id != lastID){
        //                 formatted.push(arr[i]);
        //             }
        //         }
        //     }
    
        //     console.log("formated",formatted);
        // }
    }



    return(
      
        <div className="info-blocks">
            <div className="badges">
                <div className="ready-to-ship">
                    Ready to ship
                </div>
                <div className="in-stock">
                    <span className='icon'></span>
                    <span>In stock</span>
                </div>
                <div className="fast-dispatch">
                    <span className='icon'></span>
                    <span>Fast dispatch</span>
                </div>
            </div>
                
            <div className="product-name">
                <span>{props.data.name}</span>
                <span className="text-right">{props.data.tags}</span> 
            </div>
            
            <Stars count={props.data.reviews}/>

            <PriceBox data={props.data.options}/>
            
            <div className="marchexpo">
                <div className="march-image"></div>
                <span className="text">&bull; Free shipping (up to $40)</span>
            </div>
           
            <CountdownTimer data={props.data.discount} />

            <div className="products-container">
                {props && props.data && props.data.options ? (
                    Object.values(props.data.options).map((element, index) => 
                        <Products 
                            key={index} 
                            onChange={value => setCart(
                                [...cart,
                                    value
                                ]
                            )} 
                            data={element}
                            />)
                ) : null}
            </div>
          

            <div className="trade-assurance">
               <FcLock /> <span style={{fontWeight: "bold"}}>Trade Assurance</span><span> protects your Alibaba.com orders</span>
               <div className="payments">
                   <span>Payments: <span className="icons" style={{color:"blue"}}> <FaCcVisa/> <FaCcMastercard/></span> <span style={{color: "gray"}}><FaApplePay/></span></span>
               </div>
               <div className="alibaba">
                   <span>Alibaba.com Logistics</span>
                   <span>Inspection Solutions</span>
               </div>
            </div>
          
        </div>
    )
}
export default InfoBlocks;