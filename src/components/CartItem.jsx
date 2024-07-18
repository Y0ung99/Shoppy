import React from 'react';
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';
export default function CartItem(
  {
  product,
  product:{id, image, name, option, quantity, price}, 
  uid}) {
  const handleMinus = () => {
    if(quantity < 2) return;
    addOrUpdateToCart({...product, quantity: quantity - 1}, uid)
  };
  const handlePlus = () => addOrUpdateToCart({...product, quantity: quantity + 1}, uid);
  const handleDelete = () => removeFromCart(id, uid);
  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:48 rounded-lg' src={image} alt={name} />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{name}</p>
          <p className='text-xl font-bold text-brand'>{option}</p>
          <p>₩{price}</p>
        </div>
        <div className='text2xl flex items-center'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus}/>
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}

