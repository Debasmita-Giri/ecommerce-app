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

const AffiliateProgram = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Affiliate Program
        </Typography>

        <Typography variant="body1" paragraph>
          Join our affiliate program and earn commissions by promoting ShopX products. Our affiliate program
          is designed to reward you for driving sales to our platform.
        </Typography>

        <Typography variant="h5" gutterBottom>
          How the Affiliate Program Works
        </Typography>

        <Typography variant="body1" paragraph>
          - Sign up as an affiliate and get a unique affiliate ID.
          - Promote ShopX products on your website, blog, or social media using your affiliate ID.
          - Earn a commission for each sale generated through your referral link.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Benefits of Joining
        </Typography>

        <Typography variant="body1" paragraph>
          - Earn competitive commissions on every sale.
          - Access to affiliate resources, including banners and promotional materials.
          - Real-time tracking of your commissions and performance.
          - Timely payouts via your preferred payment method.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Affiliate Guidelines
        </Typography>

        <Typography variant="body1" paragraph>
          - Comply with our affiliate program terms and conditions.
          - Promote ShopX products responsibly and ethically.
          - Do not engage in fraudulent or deceptive practices.
        </Typography>

        <Typography variant="body1" paragraph>
          Start earning commissions today by becoming a ShopX affiliate and sharing the products you love
          with your audience.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AffiliateProgram;
