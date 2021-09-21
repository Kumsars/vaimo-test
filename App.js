import * as React from "react";
import "./App.scss";
import Image from "./components/image.js"
import InfoBlocks from "./components/infoBLocks.js"
import PurchaseBox from "./components/purchase.js"
const App = () => {

  let url = "https://fe-assignment.vaimo.net/";

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [imgUrl, setImgUrl] = React.useState([]);

  //TODO--> loading bar


  React.useEffect(() => {
    getData(url);
  },[]);

  const getData = (url) =>{
    fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
      })
    .then(response => response.json())
    .then(data => {
      if(data && data.product){ 
        //let json = JSON.stringify(data.product);
        setData(data.product);
        setImgUrl(data.product.gallery[0].main);
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    setLoading(false);
  }
 
  return (

      <div className="App">
        { !loading ? (
          <div>
            <Image img={imgUrl}/>
            <InfoBlocks data={data}/>
            <PurchaseBox data={data}/>
          </div>):null}
       
      </div>
  );
   
};

export default App;
