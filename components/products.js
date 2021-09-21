import * as React from 'react';

const Products = (props) => {
    const [count, setCount] = React.useState(0);
    const [price, setPrice] = React.useState(0);

    const addValue = () => {
        setCount(count+1);
        setPrice(props.data.price.value * count);
        props.onChange({
            id:props.data.label,
            count:count+1
        });
    }

    const removeValue = () => {
        setCount(count-1);
    }

    return (
        <>
            {props && props.data ? (
                <div className="item" key={props.id}>
                    <label>{props.data.label}</label>
                    <label className="price">{props.data.price.value}</label>
                    <div className="quantity-buttons">
                        <button className="decrease" onClick={removeValue} disabled={count >= 1 ? false : true}>-</button>
                        <button className="count">{count}</button>
                        <button className="increase" onClick={addValue}>+</button>
                    </div>
                </div>
                
            ):null}
            
        </>
    );
}
export default Products;