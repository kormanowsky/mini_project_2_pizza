import React from "react";

class OrdersPage extends React.Component{
    render(){
        return window.localStorage.getItem("orders");
    }
}

export default OrdersPage;