import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import Product from "./Product";
import products from "./Products.json";
import HeaderBar from "./HeaderBar.js";
import ProductsList from "./ProductsList"

export default class App extends React.Component {
  state = {
    isAuthenticated: false
  };


  render() {
    const title = "Liste des clients";

    return (
        <ProductsList
        isAuth={this.state.isAuthenticated}
        />
          /* {products.map((product => (
            <Product 
            key={product.id}
            details={product}
            />
          )))} */
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
