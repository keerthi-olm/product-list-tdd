import React from "react";
import ReactDOM from "react-dom";
import ProductListing from "./productListing"

import { BrowserRouter, Route, Link } from 'react-router-dom';

import "./styles.css";

export default function App() {
  return (

		// App routes
		<BrowserRouter>
			<Route exact path="/" component={ProductListing} />
		</BrowserRouter>

  );
}

