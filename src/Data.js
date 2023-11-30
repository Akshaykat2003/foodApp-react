import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-2.png";
import reviewImage3 from "./assets/images/pic-3.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1, name: "veg signature burgers", price: 299, discountedPrice: 350
    
  },
  {
    img: menuImage2, name: "smoky red grilled ", price: 399, discountedPrice: 400
  },
  {
    img: menuImage3, name: "Chicken strips", price: 199, discountedPrice: 250
  },
  {
    img: menuImage4, name: "veg Extravaganza", price: 99, discountedPrice: 199
  },
  {
    img: menuImage5, name: "Tasty Healthy", price: 199, discountedPrice: 299
  },
  {
    img: menuImage6, name: "Tea", price: 299, discountedPrice: 350
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,name: "Burger", price: 299, discountedPrice: 350
  },
  {
    img: productImage2,name: "Ice Cream", price: 299, discountedPrice: 350
  },
  {
    img: productImage1,name: "Pizza", price: 299, discountedPrice: 350
  },
];
const review = [
  {
    img: reviewImage1,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name:"John Doe",
    
  },
  {
    img: reviewImage2,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name:"Julie",
  },
  {
    img: reviewImage3,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name:"Adam Smith",
  },
];
const blog = [
  {
    img: blogImage1,name: "Tasty Healthy fries", date: "By Admin/21 May,2021", 
    
  },
  {
    img: blogImage2,name: "Cruchy Sandwiches", date: "By Admin/05 jan,2022", 
  },
  {
    img: blogImage3,name: "Tasty Healthy Juice", date: "By Admin/02 feb,2023", 
  },
];
export { menu, cart, product, review, blog };
