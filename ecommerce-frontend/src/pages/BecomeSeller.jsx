import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const containerStyle = {
  marginTop: '16px',
  marginBottom: '16px',
};

const paperStyle = {
  padding: '24px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '40px',
  textAlign: 'center',
};

const BecomeSeller = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Become a Seller
        </Typography>

        <Typography variant="body1" paragraph>
          Join our platform as a seller and showcase your products to a wide audience. Becoming a seller
          with ShopX is easy and offers many benefits.
        </Typography>

        <Typography variant="h5" gutterBottom>
          How to Become a Seller
        </Typography>

        <Typography variant="body1" paragraph>
          - Register as a seller by creating an account on ShopX.
          - Provide information about your business and products.
          - Our team will review your application, and once approved, you can start listing your products.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Benefits of Selling on ShopX
        </Typography>

        <Typography variant="body1" paragraph>
          - Access to a large customer base.
          - Easy-to-use seller dashboard for product management.
          - Secure payment processing.
          - Marketing support and promotion opportunities.
          - Customer support to assist you and your customers.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Seller Guidelines
        </Typography>

        <Typography variant="body1" paragraph>
          - Ensure accurate product listings.
          - Provide excellent customer service.
          - Comply with our seller policies and guidelines.
        </Typography>

        <Typography variant="body1" paragraph>
          Join our growing community of sellers and start selling your products on ShopX today!
        </Typography>
      </Paper>
    </Container>
  );
};

export default BecomeSeller;
