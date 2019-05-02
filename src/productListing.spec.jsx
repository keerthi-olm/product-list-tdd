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
    it('should render a <section /> with class name products', () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find('section.products').length).toEqual(1);
  });
  it('when no products are loaded a <div /> with class name no-products-loaded', () => {
    //This test will run immedietly after the component is mounted. But will execute before the fetch occurs
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find('div.no-products-loaded').length).toEqual(1);
  });
    it('should render a div with class name product-card for each product in the fetched product json', async () => {
    const wrapper = mount(<ProductListing />);
    //This test will run  after the fetch. The wait will do and update after the fetch
    await wait(wrapper, w => w.find('section.products div.product-card').exists());
    const response= await FetchProductList();
    expect(wrapper.find('section.products div.product-card').length).toEqual(response.data.products.length);
  });
    it('should render a div with class name product-image for each product in the fetched product json', async () => {
    const wrapper = mount(<ProductListing />);
    //This test will run  after the fetch. The wait will do and update after the fetch
    await wait(wrapper, w => w.find('section.products div.product-card div.product-image').exists());
    const response= await FetchProductList();
    expect(wrapper.find('section.products div.product-card div.product-image').length).toEqual(response.data.products.length);
  });
});