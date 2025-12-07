import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Container,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  Form,
  Input,
  TextArea,
  Button,
  SuccessText,
  ErrorText
} from "./ProductDetails.styles";
import NavBar from "../../components/NavBar/NavBar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await api.post("/enquiries", {
        product_id: id,
        name,
        email,
        phone,
        message
      });

      setSuccess("Enquiry submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Failed to submit enquiry.");
    }
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <>
    <NavBar/>
    <Container>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductImage src={product.image} alt={product.title} />
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>

      <Form onSubmit={handleSubmit}>
        <h2>Send Enquiry</h2>
        {success && <SuccessText>{success}</SuccessText>}
        {error && <ErrorText>{error}</ErrorText>}

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <TextArea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <Button type="submit">Submit Enquiry</Button>
      </Form>
    </Container>
    </>
  );
};

export default ProductDetails;
