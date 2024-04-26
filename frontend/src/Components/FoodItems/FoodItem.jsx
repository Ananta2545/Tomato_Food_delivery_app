import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, image, description }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-img' src={image} alt='' />
        {quantity === 0 ? (
          <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='' />
        ) : (
          <div className='food-item-counter'>
            <img className='add_icon' onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt='' />
            <p>{quantity}</p>
            <img className='subtract_icon' onClick={handleAddToCart} src={assets.add_icon_green} alt='' />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>Rs {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
