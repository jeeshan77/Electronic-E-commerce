import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import { useState } from "react";


const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);

    const [showModal, setShowModal] = useState(false);

    const handleCheckoutClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        {/* <button type="button" className="btn checkout_btn">Checkout</button> */}
                                        <div style={{ position: "relative", zIndex: 1 }}>
                                            <button
                                                type="button"
                                                className="btn checkout_btn"
                                                onClick={handleCheckoutClick}
                                            >
                                                Checkout
                                            </button>

                                            {showModal && (
                                                <div
                                                    style={{
                                                        position: "fixed",
                                                        top: "0",
                                                        left: "0",
                                                        width: "100vw",
                                                        height: "100vh",
                                                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        zIndex: 1000,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            padding: "20px 30px",
                                                            borderRadius: "10px",
                                                            maxWidth: "400px",
                                                            width: "90%",
                                                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                                            textAlign: "center",
                                                            fontSize: "16px",
                                                        }}
                                                    >
                                                        <p style={{ marginBottom: "20px", color: "#060200ff" }}>
                                                            🚧 Checkout is currently unavailable.<br />Please try again later.
                                                        </p>
                                                        <button
                                                            onClick={closeModal}
                                                            style={{
                                                                padding: "10px 20px",
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                                backgroundColor: "#ff5e32",
                                                                color: "#fff",
                                                                border: "none",
                                                                borderRadius: "6px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;