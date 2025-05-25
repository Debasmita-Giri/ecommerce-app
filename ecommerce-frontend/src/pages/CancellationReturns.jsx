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

const CancellationReturns = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Cancellation & Returns
        </Typography>

        <Typography variant="body1" paragraph>
          At ShopX, we want you to be completely satisfied with your purchase. If you change your mind
          or are not entirely happy with your product, we're here to help.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Cancellation Policy
        </Typography>

        <Typography variant="body1" paragraph>
          - You can cancel your order within 24 hours of placing it by contacting our customer support.
          - If your order has already been shipped, it cannot be canceled.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Returns Policy
        </Typography>

        <Typography variant="body1" paragraph>
          - You can return your product within 30 days of receiving it.
          - The product must be in its original packaging and in unused condition.
          - Contact our customer support to initiate the return process.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Refund
        </Typography>

        <Typography variant="body1" paragraph>
          - Once we receive your returned product, we will inspect it and process your refund.
          - The refund will be credited to the original payment method.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions about our Cancellation & Returns policy, please contact us at
          info@shopx.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default CancellationReturns;
