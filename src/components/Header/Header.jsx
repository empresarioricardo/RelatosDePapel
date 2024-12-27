import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import ShopCart from "../ShopCart/ShopCart";
import { useDispatch, useSelector } from "react-redux";
import { findBooks } from "../../features/books/booksSlice";
import { useState } from "react";
import { IoBook } from "react-icons/io5";

const NavLinkActive = ({ to, onClick, children }) => (
  <NavLink
    onClick={() => onClick(true)}
    to={to}
    className={({ isActive }) =>
      isActive
        ? `${styles.navbar_nav_link} ${styles.navbar_nav_link_active}`
        : `${styles.navbar_nav_link}`
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [search, setSearch] = useState("");
  const [collapse, setCollapse] = useState(false);
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.search.visible);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findBooks(search));
    setSearch("");
  };

  return (
    <>
      <Row>
        <div className={styles.header}>
          <NavLink to="/main/home" className={styles.homeLink}>
            Relatos de Papel <IoBook />
          </NavLink>
          <div className={styles.content}>
            {visible && (
              <Form onSubmit={handleSubmit} className={styles.formSearch}>
                <InputGroup>
                  <InputGroup.Text style={{ border: "1px solid gray" }}>
                    <FaSearch style={{ color: "gray" }} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar por titulo..."
                    aria-label="Busar por titulo"
                    className={styles.formSearch_txtSearch}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
                <Button type="submit" className={styles.formSearch_btnSearch}>
                  Buscar
                </Button>
              </Form>
            )}
            <ShopCart />
          </div>
        </div>
      </Row>
      <Row>
        <Navbar
          expand="lg"
          className={styles.navbar}
          collapseOnSelect
          bg="dark"
          data-bs-theme="dark"
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={`${styles.navbar_toggle} ${collapse ? "collapsed" : ""}`}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={`${collapse ? "collapse" : "collapse show"}`}
          >
            <Nav className={styles.navbar_nav}>
              <NavLinkActive to="/main/home" onClick={setCollapse}>
                HOME
              </NavLinkActive>
            </Nav>
            {/* <Nav className={styles.navbar_nav}>
              <NavLinkActive to="/main/mas-populares">
                MÁS POPULARES
              </NavLinkActive>
            </Nav>
            <Nav className={styles.navbar_nav}>
              <NavLinkActive
                to="/main/mas-leidos"
                className={styles.navbar_nav_link}
              >
                MÁS LEÍDOS
              </NavLinkActive>
            </Nav> */}
            <Nav className={styles.navbar_nav}>
              <NavLinkActive to="/main/ofertas" onClick={setCollapse}>
                OFERTAS
              </NavLinkActive>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </>
  );
};
export default Header;
