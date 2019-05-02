import React from 'react';
import { shallow,mount,render } from 'enzyme';
import ProductListing from "./productListing"
import FetchProductList from "./services/__mocks__/fetchProductList"

//Async function waits for component to render and checks if given condition is true
const wait = (wrapper, predicate, timeout = 10) => {
  //https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894
  return new Promise((resolve, reject) => {
    if (predicate(wrapper)) {
      return resolve(true);
    }
    setTimeout(() => {
      wrapper.update();
      return predicate(wrapper) ? resolve(true) : reject(new Error('Timeout expired'));
    }, timeout);
  });
};

// Replace  with mock data for products (this is under folder __mocks__)
jest.mock("./services/fetchProductList");

describe('ProductListing', () => {
  it('should render a <div /> with class name product-listing', () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find('div.product-listing').length).toEqual(1);
  });
  it('should render a <div /> with class name title', () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find('div.page-title').length).toEqual(1);
  });
});