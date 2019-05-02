import React from "react";
import { Link } from 'react-router-dom';
import FetchProductList from './services/fetchProductList'


export default class  ProductListing extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      products: []
    };
  }


  componentDidMount() {
   this.fetchProducts();
  }

  async fetchProducts() {
     try {
      const response= await FetchProductList();

      this.setState({
      isLoaded: true,
      products: response.data.products});
        console.error(response);
    } catch(error){
        console.error(error);
    }

  }

  render() {
    let products=this.state.products;
    return (
      
      <div className='product-listing'>
        <div className="page-title">
          <h1>Flat screen tvs</h1>
        </div>
        <section className="products">
          {!this.state.isLoaded&&<div className='no-products-loaded'></div>}
          {this.state.isLoaded && products.map((product, i) => {return <Product product={product} key={i}/> })}
        </section>
      </div>
    )
  }
}

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }
  componentWillReceiveProps(nextProps) {
  
  }
render() {

console.log(this.state.product);
  return <div className='product-card'><span>{this.state.product.price[0]}</span><span>{this.state.product.title}</span>{this.state.product.productId}</div>
}

  
}

