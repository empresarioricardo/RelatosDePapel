import { useParams } from "react-router";
import { products } from "../data/db";
import { useDispatch } from "react-redux";
import { addBook } from "../features/cart/cartSlice";
import { setHide } from "../features/search/searchSlice";
import DetailBook from "../components/DetailBook/DetailBook";
import { Row } from "react-bootstrap";

const DetailsBook = () => {
  const { id } = useParams();
  const book = products.find((book) => book.id === parseInt(id));
  const dispatch = useDispatch();
  dispatch(setHide(false));
  const handleOnClick = () => {
    dispatch(addBook(book));
  };

  return (
    <Row>
      <DetailBook book={book} handleOnClick={handleOnClick} />
    </Row>
  );
};
export default DetailsBook;
