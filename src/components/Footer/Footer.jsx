import Row from "react-bootstrap/Row";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer_legend}>
          <div className={styles.footer_element}>
            <h6>Universidad de la Rioja</h6>
            <hr className={styles.footer_hr} />
            <p>La Universidad en Internet</p>
          </div>
          <div className={styles.footer_border} />
          <div className={styles.footer_element}>
            <h6>Derechos reservados</h6>
            <hr className={styles.footer_hr} />
            <p>Ricardo Eduardo Olarte Torres</p>
            <p>Copyright &copy; 2024</p>
          </div>
          <div className={styles.footer_border} />
          <div className={styles.footer_element}>
            <h6>Asignatura</h6>
            <hr className={styles.footer_hr} />
            <p>Desarrollo Web - Full Stack</p>
            <p>Jesus Perez Melero</p>
            <p>docente</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
