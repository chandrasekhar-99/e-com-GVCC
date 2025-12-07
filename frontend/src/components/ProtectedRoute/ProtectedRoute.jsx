import { Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  
  const token = localStorage.getItem("token");
  console.log("TOKEN:", localStorage.getItem("token"))

  const isAuthorized = !!token;

  if (!isAuthorized) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>You must be logged in as admin to access this page.</p>
        <Link to="/admin-login">Go to Admin Login</Link>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
