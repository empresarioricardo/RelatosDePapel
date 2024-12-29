import { Row } from "react-bootstrap";
import ListBooks from "../components/Books/ListBooks";

const Offer = () => {
  return (
    <Row>
      <ListBooks filter={true} />
    </Row>
  );
};
export default Offer;
