import { useState, useEffect } from "react";
import api from "../../services/api";
import {
  EnquiriesContainer,
  EnquiryCard,
  EnquiryTitle,
  EnquiryInfo,
  EnquiryMessage,
  ErrorText,
  LoadingText,
  EnquiriesHeading,
  ProductImage,
  ProductTitle
} from "./EnquiriesPage.styles";
import { Link } from "react-router-dom";

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        setError("You must be logged in as admin to view this page.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/enquiries", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(response)

        

        const enquiriesData = response.data;

        if (!Array.isArray(enquiriesData) || enquiriesData.length === 0) {
          setEnquiries([]);
          setLoading(false);
          return;
        }

        // Fetch product info
        const enrichedEnquiries = await Promise.all(
          enquiriesData.map(async (enquiry) => {
            try {
              const productRes = await api.get(`/products/${enquiry.product_id}`);
              return { ...enquiry, product: productRes.data };
            } catch {
              return { ...enquiry, product: null };
            }
          })
        );

        setEnquiries(enrichedEnquiries);
      } catch (err) {
        console.error(err);
        setError(
          "Failed to fetch enquiries. " + (err.response?.data?.error || err.message)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  if (loading) return <LoadingText>Loading enquiries...</LoadingText>;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (enquiries.length === 0) return <p>No enquiries found.</p>;

  return (
    <EnquiriesContainer>
      <EnquiriesHeading>Admin Enquiries</EnquiriesHeading>

      {enquiries.map((enquiry) => (
        <EnquiryCard key={enquiry.id}>
          <EnquiryTitle>Enquiry #{enquiry.id}</EnquiryTitle>

          {enquiry.product && (
            <>
              <ProductImage src={enquiry.product.image} alt={enquiry.product.title} />
              <ProductTitle>{enquiry.product.title}</ProductTitle>
            </>
          )}

          <EnquiryInfo>
            <strong>Name:</strong> {enquiry.name} <br />
            <strong>Email:</strong> {enquiry.email} <br />
            <strong>Phone:</strong> {enquiry.phone} <br />
            <strong>Product ID:</strong> {enquiry.product_id} <br />
            <strong>Submitted at:</strong> {enquiry.created_at}
          </EnquiryInfo>

          <EnquiryMessage>
            <strong>Message:</strong> {enquiry.message}
          </EnquiryMessage>
        </EnquiryCard>
      ))}

      <Link to="/admin-login">Back to Admin Login</Link>
    </EnquiriesContainer>
  );
};

export default EnquiriesPage;
