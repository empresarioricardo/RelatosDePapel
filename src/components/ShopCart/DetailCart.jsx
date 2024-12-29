import { Table } from "react-bootstrap";
import CartItem from "./CartItem";

const DetailCart = ({ cartItems, total, removeFromCart, addFromCart }) => {
  return (
    <>
      <Table responsive>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              cartItem={item}
              removeFromCart={removeFromCart}
              addFromCart={addFromCart}
            />
          ))}
          <tr className="align-middle">
            <td colSpan={2}>Total</td>
            <td className="text-right">${total}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default DetailCart;
