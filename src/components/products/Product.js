import React from 'react';
import img from '../../assets/Cafe-Espresso.png';

const Product = (props) => {
  const {
    id, name, price, description,
  } = props;

  return (
    <div className="product">
      <div className={id % 2 ? 'left' : 'right'}>
        <img src={img} alt={name} />
        {/* <img src={"../../assets/"+picture} alt={name} /> */}
      </div>
      <div className={`description ${!(id % 2) ? 'left' : 'right'}`}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Product;
