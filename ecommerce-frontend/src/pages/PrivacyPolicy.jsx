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
  textAlign: 'center', // You can adjust the font size as needed
};

const PrivacyPolicy = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
      <Typography variant="h1" gutterBottom style={titleStyle}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph>
          This Privacy Policy applies to the ShopX website (the "Website") and governs the
          privacy of its users. It explains how we use and protect your personal information.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>

        <Typography variant="body1" paragraph>
          We may collect and process the following information about you:
          - Information you provide when registering an account on our website.
          - Information you provide when making a purchase, including billing and shipping details.
          - Information you provide when contacting us for support or inquiries.
          - Information collected through cookies and similar tracking technologies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          How We Use Your Information
        </Typography>

        <Typography variant="body1" paragraph>
          We use the information we collect for the following purposes:
          - To process and fulfill your orders and provide customer support.
          - To improve our products, services, and user experience.
          - To personalize your shopping experience and show you relevant content.
          - To send you promotional emails and updates with your consent.
          - To monitor and analyze website usage and trends.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Data Security
        </Typography>

        <Typography variant="body1" paragraph>
          We take data security seriously and implement appropriate measures to protect your information.
          We use secure connections (HTTPS), encryption, and access controls to safeguard your data.
          However, please be aware that no method of transmission over the internet or electronic storage
          is 100% secure.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Sharing of Information
        </Typography>

        <Typography variant="body1" paragraph>
          We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          We may share your information with trusted service providers who assist us in operating our
          website, conducting our business, or serving you. These third parties have their own privacy
          policies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Your Choices
        </Typography>

        <Typography variant="body1" paragraph>
          You have the right to:
          - Access, correct, or delete your personal information.
          - Object to the processing of your information.
          - Withdraw your consent for marketing communications.
          - Request data portability.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy or the data we hold about you,
          please contact us at info@shopx.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
