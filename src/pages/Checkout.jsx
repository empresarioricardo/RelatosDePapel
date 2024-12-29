import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SweetAlert2 from "react-sweetalert2";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, resetCart } from "../features/cart/cartSlice";
import { findBooks } from "../features/books/booksSlice";
import { setHide } from "../features/search/searchSlice";
import { Badge, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailCart from "../components/ShopCart/DetailCart";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(deleteBook(item));
  };
  const addFromCart = (item) => {
    dispatch(addBook(item));
  };
  const [swalProps, setSwalProps] = useState({});
  function handleClick() {
    setSwalProps({
      title: "Compra Exitosa!!",
      text: "Su compra se ha realizado con éxito",
      show: true,
      icon: "success",
    });
  }

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

  dispatch(setHide(false));

  return (
    <>
      <Row>
        {cartItems.length === 0 ? (
          <div className="h-auto W-100% d-flex justify-content-center align-items-center border border-dark rounded-3 my-2 py-5">
            <div className="text-center ">
              <h1>¡Tu Carrito esta Vació!</h1>
              <Button variant="dark" as={Link} to="/main/home">
                Ir al menú principal
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="row px-4 py-5 my-5">
              <div className="col-md-8">
                <h4 class="mb-3">Dirección de Entrega</h4>
                <hr class="mb-4"></hr>
                <Form className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pais</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione</option>
                        <option value="1">Colombia</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Estado</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione</option>
                        <option value="1">Antioquia</option>
                        <option value="2">Cundinamarca</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <hr class="mb-4"></hr>
                  <h4 class="mb-3">Datos de Pago</h4>
                  <div key={`default-radio`} className="mb-3">
                    <Form.Check
                      label="Tarjeta Credito"
                      name="credit-card"
                      type="radio"
                      id={`credit-card`}
                    />
                    <Form.Check
                      label="Tarjeta Debito"
                      name="debit-card"
                      type="radio"
                      id={`debit-card`}
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nombre en la Tarjeta</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Número en la Tarjeta</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Fecha de expiración</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <hr class="mb-4"></hr>
                  <Button
                    className="w-100"
                    variant="dark"
                    onClick={handleClick}
                  >
                    Pagar
                  </Button>
                </Form>
              </div>
              <div className="col-md-4">
                <h5>
                  Tu carrito tiene
                  <Badge pill bg="dark" className="mx-2">
                    {amount}
                  </Badge>
                  libros
                </h5>
                <DetailCart
                  cartItems={cartItems}
                  total={total}
                  removeFromCart={removeFromCart}
                  addFromCart={addFromCart}
                />
              </div>
            </div>

            <SweetAlert2
              {...swalProps}
              didOpen={() => {
                // run when swal is opened...
              }}
              didClose={() => {
                // run when swal is closed...
                dispatch(resetCart());
                dispatch(findBooks(""));
                navigate("/main/home");
              }}
            />
          </>
        )}
      </Row>
      {/* <button onClick={handleClick}>Alert</button> */}
    </>
  );
};
export default Checkout;
