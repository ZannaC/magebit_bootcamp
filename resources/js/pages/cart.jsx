import React from 'react';
import { useProduct } from '../ProductContext'; // Импортируйте useProduct

function Cart() {
    const { amount } = useProduct(); // Получите доступ к контексту

    return (
        <div>
            <h1>Корзина</h1>
            <p>Amount: {amount}</p>
        </div>
    );
}

export default Cart;
