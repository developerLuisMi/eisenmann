import Login from "../componentesp/Login";
import PropTypes from "prop-types";
const Admin = ({ setIsAuthenticated }) => {
  const handleSuccessfulAuthentication = () => {
    setIsAuthenticated(true);
  };
  return (
    <>
      <Login onAuthenticationSuccess={handleSuccessfulAuthentication} />
    </>
  );
};
Admin.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Admin;
