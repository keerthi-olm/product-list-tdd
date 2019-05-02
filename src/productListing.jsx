import React from "react";
import { Link } from 'react-router-dom';
import FetchProductList from './services/fetchProductList'


export default class  ProductListing extends React.Component  {

  render() {
    return (
      
      <div className='product-listing'>
        <div className="page-title">
          <h1>Flat screen tvs</h1>
        </div>
      </div>
    )
  }
}

