import { Image, Button } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import styles from "./DetailBook.module.css";
const DetailBook = ({ book, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        {book.offer && (
          <div className={styles.book_offer}>{book.valueOffer}%</div>
        )}
        <Image className={styles.image} src={book.images[0]} />
      </div>
      <div className={styles.container_info}>
        <h1 className="display-5 fw-bolder">{book.title}</h1>
        <div className="fs-5 mb-5">
          <span>
            {book.offer ? (
              <div>
                <h5 className={styles.texto_tachado}>${book.price}</h5>
                <h5>${book.price - (book.price * book.valueOffer) / 100}</h5>
              </div>
            ) : (
              <h5>${book.price}</h5>
            )}
          </span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="p-2 w-50">
            Fecha de Publicacion: <p>{book.publicationDate}</p>
          </div>
          <div className="p-2 w-50">
            Autor:
            <p className="bold">{book.author}</p>
          </div>
          <div className="p-2 w-50">
            Categoria:
            <p>{book.category}</p>
          </div>
        </div>
        <Button variant="outline-dark align-middle" onClick={handleOnClick}>
          {/* <BsCart4 className="me-1" /> */}
          <BsCart4 className={styles.shopCart_button_icon} />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};
export default DetailBook;
