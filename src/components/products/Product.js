import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {
    id, name, price, description, picture,
  } = props;

  return (
    <div className="product">
      <div className={id % 2 ? 'left' : 'right'}>
        <img src={picture} alt={name} />
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

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
