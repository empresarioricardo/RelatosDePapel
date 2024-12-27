import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { BsCart4 } from "react-icons/bs";
import styles from "./ShopCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DetailCart from "./DetailCart";

const ShopCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const removeFromCart = (item) => {
    dispatch(deleteBook(item));
  };
  const addFromCart = (item) => {
    dispatch(addBook(item));
  };

  useEffect(() => {
    let total = 0;
    let cantidad = 0;
    cartItems.forEach((item) => {
      total += parseInt(
        (item.price - (item.price * item.valueOffer) / 100) * item.amount
      );
      cantidad += parseInt(item.amount);
    });
    setTotal(total);
    setAmount(cantidad);
  }, [cartItems]);

  return (
    <>
      <div className={styles.shopCart}>
        <button onClick={toggleShow} className={styles.shopCart_button}>
          <Badge pill className={styles.shopCart_button_badge}>
            <p className={styles.shopCart_button_badge_text}>{amount}</p>
          </Badge>
          <BsCart4 className={styles.shopCart_button_icon} />
        </button>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Tu carrito tiene
            <Badge pill bg="dark" className="mx-2">
              {amount}
            </Badge>
            libros
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h5>¡Tu Carrito esta Vació!</h5>
              <p>Agrega una nuevo libro</p>
            </div>
          ) : (
            <>
              <DetailCart
                cartItems={cartItems}
                total={total}
                cantidad={amount}
                removeFromCart={removeFromCart}
                addFromCart={addFromCart}
              />
              <button
                className={styles.shopCart_Button_buy}
                onClick={toggleShow}
              >
                <Link style={{ textDecoration: "none" }} to="/main/checkout">
                  Comprar
                </Link>
              </button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart.items,
//     total: state.cart.total,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (item) => dispatch(removeFromCart(item)),
//     addToCart: (item) => dispatch(addToCart(item)),
//   };
// };

export default ShopCart;
