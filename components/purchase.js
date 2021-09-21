import * as React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Purchase = (props) => {

    
    return(
        <div className="purchase">
            <div className="info-and-price">
                <span className="left">
                    Ship to 
                    <span style={{textDecoration:"underline"}}>
                        South Africa by Express UPS Sav…
                    </span>
                </span>
                <span className="right">
                {props && props.data && props.data.shipping && props.data.shipping.method && props.data.shipping.method.cost && props.data.shipping.method.cost.currency && props.data.shipping.method.cost.currency.symbol ? props.data.shipping.method.cost.currency.symbol : null} {props && props.data && props.data.shipping && props.data.shipping.method && props.data.shipping.method.cost && props.data.shipping.method.cost.value ? props.data.shipping.method.cost.value : null} 
                </span>
            </div>

            <div className="lead-time">
                <span>Lead time 
                    {props && props.data && props.data.shipping && props.data.shipping.lead_time && props.data.shipping.lead_time.value ? props.data.shipping.lead_time.value : null}
                </span>
                <div className="tooltip">
                 <AiOutlineInfoCircle />
                    <span className="tooltiptext">
                        {props && props.data && props.data.shipping && props.data.shipping.lead_time && props.data.shipping.lead_time.info ? props.data.shipping.lead_time.info : null}
                    </span>
                </div>
            </div>

            <div className="shipping-time">
                <span>
                    Shipping time {props && props.data && props.data.shipping && props.data.shipping.method  && props.data.shipping.method.shipping_time && props.data.shipping.method.shipping_time.value ? props.data.shipping.method.shipping_time.value : null}
                </span>
                <div className="tooltip">
                 <AiOutlineInfoCircle />
                    <span className="tooltiptext">
                    {props && props.data && props.data.shipping && props.data.shipping.method  && props.data.shipping.method.shipping_time && props.data.shipping.method.shipping_time.info ? props.data.shipping.method.shipping_time.info : null}
                    </span>
                </div>
            </div>

            <div className="login-to-purchase">
                <div><button className="login">Login to purchase</button></div>
                
                <div><button className="contact"><FiMail/> Contact the Supplier</button></div>
            </div>
        
        </div>
    )
}
export default Purchase;