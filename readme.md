TDD approach - An asynchronus product listing app - React,Jest and Enzyme with data mocking
--------------------------------------------------------------------------------------------------

This project highlights the TDD approach taken to develope a react.js app that fetches and renders a product list. I am using Jest as the testing framework together with enzyme to write the tests. The tests use mock data to simulate async data fetches for the products. Enzyme allows us to test components in shallow or mounted mode. Mounted mode allows us to test the component with all its child components loaded. The app will make a rest call to fetch products, when json response is received the data is used to render the product list with such details as title, price and an image link. See the final result below:

![alt text](http://ui-design-coder.com/wp-content/uploads/2019/05/TDDProductList.jpg)


Folder structure of this project
--------------------------------

You will notice that in the folder structure there is a folder called __mocks__, this folder contains the mock functions that will mock the async calls to fetch data. With Jest you can replace  functions with mock functions. For this we will write a line of code similar to : jest.mock("./services/fetchProductList");

			- public
			- package.json
			- src (Source folder)
				- services
					- __mocks__   (contains code to mock async calls to fetch product list)
						-fetchProductList.jsx
					- fetchProductList.jsx     (Component to fetch product list asynchronously)
				- index.js 
				- app.jsx
				- productListing.jsx  (Component fetches and displays product list)
				- productListing.spec.jsx (TDD tests written with Jest and enzyme)
				- setupTests.js (Settings for enzyme testing)
				- style.css


To install and test the app
---------------------------
to run tests ...

npm test

The screen shot below shows that all tests have been successful
![alt text](http://ui-design-coder.com/wp-content/uploads/2019/05/TDDtestScreenProductList.jpg)


to run the app ...

npm start


...  a bit about the tests
--------------------------
We will be testing the productListing component, the tests for this component is contained in productListing.spec.jsx.

There is a wait function declared at the top. This little function is useful in dealing with reacts lifecycle hooks. So that our tests can be in sync with reacts lifecycle hooks,  we will wait for the views to be fully rendered before continuing.

The tests also uses Jest mock features to substitute functions when in test mode. I have highlighted the ares of intrest below.

![alt text](http://ui-design-coder.com/wp-content/uploads/2019/05/tddproductlistingAnotation.jpg)

TDD approach
--------------------------
You can inspect and review the commits to this repository to undersatnd the TDD approach. I have written the commit messages in a way its easy to understand the TDD approach taken.



