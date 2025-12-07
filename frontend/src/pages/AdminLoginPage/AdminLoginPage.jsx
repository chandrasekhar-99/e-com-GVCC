import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContainer, LoginCard, Title, Input, Button, ErrorText } from "./AdminLoginPage.styles";
import api from "../../services/api";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/login", { username, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setLoginSuccess(true);
      }
    } catch (err) {
      setError("Invalid username or password: " + err.message);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Admin Login</Title>

        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />


          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          {error && <ErrorText>{error}</ErrorText>}

          {!loginSuccess && <Button type="submit">Login</Button>}
        </form>

        {loginSuccess && (
          <Link to="/enquiries">
            <Button>Go to Enquiries</Button>
          </Link>
        )}
      </LoginCard>
    </LoginContainer>
  );
};

export default AdminLoginPage;
