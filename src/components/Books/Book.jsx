import { Link, useNavigate } from "react-router-dom";
import styles from "./ListBooks.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/cart/cartSlice";
const Book = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log(book);
    dispatch(addBook(book));
  };

  return (
    <div className={styles.book}>
      {book.offer && (
        <div className={styles.book_offer}>{book.valueOffer}%</div>
      )}
      <Link to={`/main/libro/${book.id}`} className={styles.book_link}>
        <img
          src={book.images[0]}
          alt={book.title}
          className={styles.book_img}
        />
        <hr />
        <h4>{book.title}</h4>
        {book.offer ? (
          <div>
            <h5 className={styles.texto_tachado}>${book.price}</h5>
            <h5>${book.price - (book.price * book.valueOffer) / 100}</h5>
          </div>
        ) : (
          <h5>${book.price}</h5>
        )}
      </Link>
      <div className={styles.book_buttons}>
        <button className={styles.book_button_add} onClick={handleOnClick}>
          <IoMdAddCircleOutline className={styles.book_button_add_icon} />
        </button>
        <button
          className={styles.book_button_buy}
          onClick={() => {
            navigate(`/main/libro/${book.id}`);
          }}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};
export default Book;
