import React from "react";
import Product from "./Product";
import products from "./Products.json";
import ProductPanel from "./ProductPanel"

class ProductsList extends React.Component {
  state = {
    
    productTargeted : "",
    products : products,
  };

  onClickEdit = () => {};


  newProduct = (product) => {
    const newProduct = {
        "id": this.state.products[this.state.products.length - 1].id + 1,
        "title": product.title,
        "price": product.price,
        "description": product.description,
        "category": product.category,
        "image": product.image
    }
    return newProduct;
  }
  onClickCopy = (product) => {
    
    const newProducts = this.state.products.concat(this.newProduct(product));
      this.setState({ products : newProducts});
    
  };

  onClickDelete = (productToDelete) => {
    const updatedProducts = this.state.products.filter(product => product.id != productToDelete.id )
    this.setState({ products : updatedProducts})
  }


  render() {

    return (
      <section className="section">
        if (this.state.productTargeted){
          
        }
        <div className="container">
            <button onClick={this.test}>Test </button>
            <div className="columns is-multiline">
                {this.state.products.map((product => (
                  <Product
                  key={product.id}
                  details={product}
                  isAuth={this.props.isAuth}
                  copyFunction={this.onClickCopy}
                  deleteFunction={this.onClickDelete}
                  />
                )))};
            </div>
          </div>
      </section>
    
          /* {products.map((product => (
            <Product 
            key={product.id}
            details={product}
            />
          )))} */
    );
  }
}

export default ProductsList