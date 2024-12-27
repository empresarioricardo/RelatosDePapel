import Row from "react-bootstrap/Row";
import ListBooks from "../components/Books/ListBooks";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <>
      {/* <Row>
        <Slider />
      </Row> */}
      <Row>
        <ListBooks />
      </Row>
    </>
  );
}

export default Home;
