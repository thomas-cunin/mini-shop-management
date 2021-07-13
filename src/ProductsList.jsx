import React from "react";
import Product from "./Product";
import products from "./Products.json";
import ProductPanel from "./ProductPanel"

class ProductsList extends React.Component {
  state = {
    
    productTargeted : -1,
    products : products,
    renderProduct : {
      "id": -1,
      "title": "",
      "price": -1,
      "description": "",
      "category": "",
      "image": ""
    },
    panelToggle : false,
  };

  onClickEdit = (id) => {
    this.setState({...this.state,productTargeted : id});
    const renderProduct = this.state.products.find(product => product.id === id)
    console.log(renderProduct);
    this.setState({renderProduct : renderProduct, panelToggle : true});
    
  };

  saveEdit = (product) => {};

  

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
      this.setState({...this.state, products : newProducts});
    
  };

  onClickDelete = (productToDelete) => {
    const updatedProducts = this.state.products.filter(product => product.id != productToDelete.id )
    this.setState({...this.state, products : updatedProducts})
  }


  test = () => {
    console.log(this.state.renderProduct)
  }
  render() {

    return (
      <section className="section">
          <ProductPanel
          details={this.state.renderProduct}
          key='panelKey7'
          panelToggle={this.state.panelToggle}
          />
        
        <div className="container">
            <div className="columns is-multiline">
                {this.state.products.map((product => (
                  <Product
                  key={product.id}
                  details={product}
                  isAuth={this.props.isAuth}
                  copyFunction={this.onClickCopy}
                  deleteFunction={this.onClickDelete}
                  editFunction={this.onClickEdit}
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