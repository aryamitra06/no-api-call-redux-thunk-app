import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cart';
function Body() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);

    const addToCartHandler = () => {
        dispatch(addToCart(1));
    }
    const removeFromCartHandler = () => {
        dispatch(removeFromCart(1));
    }

    return (
        <>
            <div className="container mt-3">
                <div className="card" style={{width: '300px'}}>
                    <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="cart item"/>
                        <div className="card-body">
                            <h5 className="card-title">Nike Men's Joyride Run Flyknit Shoe</h5>
                            <p className="card-text">Price:	₹13,494.00</p>
                            <button className="btn btn-success" style={{marginRight: '5px'}} onClick={addToCartHandler}>ADD TO CART</button>
                            {
                                state>0 && (
                                    <button className="btn btn-danger" onClick={removeFromCartHandler}><i className="fas fa-minus"></i> Remove</button>
                                )
                            }
                        </div>
                </div>
            </div>
        </>
    )
}

export default Body