
import React from "react";
import ReactDOM from "react-dom/client";
/*
-header
logo
nav items
body
search 
restaurant container
res card
Footer
Copyright
Links
Contact Information



*/

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>
                        Contact Us
                    </li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    );
};
const RestaurantCard=()=>{
    return(
        <div className="res-card"style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo" alt ="res-logo" 
           src="https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1527.jpg"/>
            <h3>Food Master</h3>
            <h4>Biryani,North-Indian,Asian</h4>
            <h4>4.3</h4>
             </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

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