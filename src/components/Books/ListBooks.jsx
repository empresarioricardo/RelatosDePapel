import styles from "./ListBooks.module.css";
import Book from "./Book";
import { useSelector, useDispatch } from "react-redux";
import { IoBook } from "react-icons/io5";
import { setHide } from "../../features/search/searchSlice";
const ListBooks = ({ filter = false }) => {
  const dispatch = useDispatch();
  dispatch(setHide(true));
  const booksFilter = useSelector((state) =>
    filter
      ? state.book.filterBooks.filter((book) => book.offer === true)
      : state.book.filterBooks
  );
  return (
    <div
      className={styles.listBook}
      style={booksFilter.length > 0 ? { display: "grid" } : null}
    >
      {booksFilter.length == 0 ? (
        <div className={styles.notFound}>
          No hay resultados <IoBook />
        </div>
      ) : (
        booksFilter.map((book) => {
          return <Book key={book.id} book={book} />;
        })
      )}
    </div>
  );
};
export default ListBooks;
