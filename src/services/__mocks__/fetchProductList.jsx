  import axios from 'axios';

  export default async function() {

  	const fakeData=[{
		    "productId": "5cc84a8a924bb812bc174a27",
		    "title": "Samsung The Frame (2018) Art Mode TV with No-Gap Wall Mount, 65inch Ultra HD Certified ",
		    "brand": "Samsung",
		    "price": "1829.26",
		    "picture": "http://placehold.it/32x32"
		  },
		  {
		    "productId": "5cc84a8a6b922f87182779a3",
		    "title": "LG OLED65E8PLA OLED HDR 4K Ultra HD Smart TV, 65inch with Freeview Play / Freesat HD,Picture - On - Glass Design & amp;Dolby Atmos,Ultra HD Certified,Black ",
		    "brand": "LG",
		    "price": "1400.83",
		    "picture": "http://placehold.it/32x32"
		  },
		  {
		    "productId": "5cc84a8acfd30482076b6417",
		    "title": "Samsung The Frame (2018) Art Mode TV with No-Gap Wall Mount, 49inch  Ultra HD Certified ",
		    "brand": "Samsung",
		    "price": "753.74",
		    "picture": "http://placehold.it/32x32"
		  },
		  {
		    "productId": "5cc84a8a924bb812bc174a27",
		    "title": "Samsung The Frame (2018) Art Mode TV with No-Gap Wall Mount, 65inch Ultra HD Certified ",
		    "brand": "Samsung",
		    "price": "1829.26",
		    "picture": "http://placehold.it/32x32"
		  },
		  {
		    "productId": "5cc84a8a499dd4d81b91854d",
		    "title": "Sony Bravia KD65XF8505 LED HDR 4K Ultra HD Smart Android TV, 65inch with Freeview HD & amp;Youview, Black ",
		    "brand": "Sony",
		    "price": "2375.21",
		    "picture": "http://placehold.it/32x32"
		  },
		  {
		    "productId": "5cc84a8ae8efc2ca171f6a0d",
		    "title": "Philips 55OLED803 OLED HDR 4K Ultra HD Smart Android TV, 55” with Freeview HD &amp; Ambilight, UHD Premium Certified, Silver",
		    "brand": "Philips",
		    "price": "1,961.92",
		    "picture": "http://placehold.it/32x32"
		  }
		];
   const response={"data":{"products":fakeData}}
    // return await axios.get('/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20');
   return await new Promise(resolve => resolve(response));
  }
