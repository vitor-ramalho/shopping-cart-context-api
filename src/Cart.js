import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
    const [cart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div>
            <span>Items in cart: {cart.length}</span>
            <br />
            <span>Total Price: {totalPrice}</span>
        </div>
    )
}

