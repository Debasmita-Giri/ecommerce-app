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

const ContactUs = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions, concerns, or feedback, we'd love to hear from you. You can reach
          out to us through the following channels:
        </Typography>

        <Typography variant="h5" gutterBottom>
          Customer Support
        </Typography>

        <Typography variant="body1" paragraph>
          - For assistance with your orders or inquiries, please contact our customer support team at
            support@shopx.com or call us at +123-456-7890.
        </Typography>

        <Typography variant="h5" gutterBottom>
          General Inquiries
        </Typography>

        <Typography variant="body1" paragraph>
          - For general questions or feedback, you can email us at info@shopx.com.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Visit Us
        </Typography>

        <Typography variant="body1" paragraph>
          - Our office is located at 123 ShopX Street, City Name, Country.
          - Please note that office visits are by appointment only.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Social Media
        </Typography>

        <Typography variant="body1" paragraph>
          - Connect with us on social media:
            <ul>
              <li>Facebook: @ShopX</li>
              <li>Twitter: @ShopXOfficial</li>
              <li>Instagram: @ShopXgram</li>
            </ul>
        </Typography>

        <Typography variant="body1" paragraph>
          We aim to respond to your inquiries promptly and provide you with the best assistance.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactUs;
