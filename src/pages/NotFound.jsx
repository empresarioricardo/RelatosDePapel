import imagen404 from "../assets/images/not-found-error.jpg";
const NotFound = () => {
  return (
    <div className="text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>ERROR 404</h1>
      <hr />
      <h2>Recurso no encontrado!!</h2>
      <img src={imagen404} alt="Error" />
    </div>
  );
};
export default NotFound;
