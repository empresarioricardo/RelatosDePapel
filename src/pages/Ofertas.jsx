import { Row } from "react-bootstrap";
import ListBooks from "../components/Books/ListBooks";

const Ofertas = () => {
  return (
    <Row>
      <ListBooks filter={true} />
    </Row>
  );
};
export default Ofertas;
