import React from 'react';
import Product from './Product';
import './products.css';

const Products = () => {
  const productObj = [
    {
      name: 'Espresso',
      price: '10.99 $',
      picture: 'Cafe-Espresso.png',
      description: 'Espresso shots covered with hot water, generating a thin creamy layer.',
    },
    {
      name: 'Cappuccino',
      price: '10.99 $',
      picture: 'Cafe-Espresso.png',
      description: 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.',
    },
    {
      name: 'Iced Cappuccino',
      price: '15.99 $',
      picture: 'Iced-Cappuccino.png',
      description: 'The intensity of our espresso meets the sweetness of milk, served covered with ice cubes.',
    },
    {
      name: 'Pumpkin Spice Latte',
      price: '10.99 $',
      picture: 'Cafe-Espresso.png',
      description: 'Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.',
    },
  ];

  return (
    <div className="products">
      {
          productObj.map((product, i) => (
            <Product
              key={product.name}
              id={i}
              name={product.name}
              price={product.price}
              picture={product.picture}
              description={product.description}
            />
          ))
        }
      <h1>_________</h1>
    </div>
  );
};

// https://www.starbucks.fr/menu/boissons
// https://www.starbucks.com/menu/drinks/hot-coffees
export default Products;
