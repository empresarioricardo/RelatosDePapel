import { useNavigate } from "react-router";
import useTimer from "../hooks/TimerHook";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const seconds = useTimer(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds < 1) {
      navigate("/main/home");
    }
  }, [seconds]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        background: "#333",
      }}
    >
      <h1 style={{ color: "white" }}>Bienvenidos a Relatos de Papel</h1>
      <h2 style={{ color: "white" }}>La mejor tienda de libros en línea</h2>
      <hr style={{ color: "white" }} />
      <p style={{ color: "white" }}>
        Iniciar Menú Principal en {seconds} segundos ...
      </p>

      <Link
        as={Link}
        to={"/main/home"}
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          background: "orange",
          color: "white",
          border: "1px solid orange",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        Continuar
      </Link>
    </div>
  );
};
export default LandingPage;
