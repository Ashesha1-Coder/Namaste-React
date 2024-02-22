
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";


/**below is an example of inline style in js  */
const RestaurantCard=(props)=>{
const{resName,cuisine}= props;
     return(
        <div className="res-card"style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo" alt ="res-logo" 
           src="https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1527.jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine} </h4>
            <h4>4.3</h4>
            <h4>38 minutes</h4>
             </div>
    )
}
/*passing props to component rescard below*/


const AppLayout=()=>{
       return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
       )
}
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);