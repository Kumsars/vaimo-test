import * as React from 'react';

const PriceBox = (props) => {

    const [newHighest, setNewHighest] = React.useState();
    const [newLowest, setNewLowest] = React.useState();
    const [oldHighest, setOldHighest] = React.useState(); 
    const [oldLowest, setOldLowest] = React.useState();
    const [currency, setCurrency] = React.useState();
 

    React.useEffect(() => {
        arrangeValues(props)
    });

    const arrangeValues = (values) => {

        if(values && values.data){
            let newValues = Object.values(values.data).map((element)=>element.price.value);
            setNewLowest(Math.min(...newValues));
            setNewHighest(Math.max(...newValues));

            let oldValues = Object.values(values.data).map((element)=>element.old_price.value);
            setOldLowest(Math.min(...oldValues));
            setOldHighest(Math.max(...oldValues));

            setCurrency(values.data["4k"].price.currency.symbol);
          
        }
        
    }
    return(
        <div className="surface">
            <div>
                <span className="new-price">{currency} {newLowest} - {currency} {newHighest}</span>
                <span style={{color:"grey", fontSize:"14px"}}> / Option <span  style={{color:"black", fontSize:"14px"}}>2 Options</span> (Min.Order)</span>
            </div>
            <div className="old-price">
                <span>{currency} {oldLowest} - {currency} {oldHighest}</span>
            </div>

        </div>
    );
}
export default PriceBox;