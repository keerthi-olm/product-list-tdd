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
  render() {
    return (
      
      <div className='product-listing'>
        <div className="page-title">
          <h1>Flat screen tvs</h1>
        </div>
        <section className="products">
          {!this.state.isLoaded&&<div className='no-products-loaded'></div>}
        </section>
      </div>
    )
  }
}

