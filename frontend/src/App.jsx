import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./App.styles";
import HomePage from "./pages/HomePage/HomePage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import EnquiriesPage from "./pages/EnquiriesPage/EnquiriesPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route
          path="/enquiries"
          element={
            <ProtectedRoute>
              <EnquiriesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
