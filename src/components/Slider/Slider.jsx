import Carousel from "react-bootstrap/Carousel";
import algebra_de_baldor from "../../assets/books/algebra-de-baldor.jpg";
import atlantis from "../../assets/books/atlantis.jpg";
import cada_historia_cuenta from "../../assets/books/cada-historia-cuenta.jpg";
import { useState } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

const favouriteBooks = [
  {
    id: 1,
    title: "Algebra de Baldor",
    image: algebra_de_baldor,
    price: "$100",
  },
  {
    id: 2,
    title: "Atlantis",
    image: atlantis,
    price: "$200",
  },
  {
    id: 3,
    title: "Cada historia cuenta",
    image: cada_historia_cuenta,
    price: "$300",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className={styles.carousel}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {favouriteBooks.map((book) => (
        <Carousel.Item key={book.id} className={styles.carousel_item}>
          <Link
            to={`/main/libro/${book.id}`}
            key={book.id}
            className={styles.carousel_link}
          >
            <img src={book.image} alt={book.title} />
            <Carousel.Caption className={styles.carousel_caption}>
              <h1>{book.title}</h1>
              <p>{book.price}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
