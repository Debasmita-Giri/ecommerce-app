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

const TermsOfUse = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Terms of Use
        </Typography>

        <Typography variant="body1" paragraph>
          These Terms of Use ("Terms") govern your use of the ShopX website (the "Website") operated by
          ShopX. By accessing and using the Website, you agree to comply with and be bound by these Terms.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Acceptance of Terms
        </Typography>

        <Typography variant="body1" paragraph>
          By using the Website, you agree to these Terms. If you do not agree with these Terms, please
          do not use the Website.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Use of the Website
        </Typography>

        <Typography variant="body1" paragraph>
          - You may use the Website for your personal, non-commercial use.
          - You may not use the Website for any illegal or unauthorized purpose.
          - You agree not to interfere with the security or functionality of the Website.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Intellectual Property
        </Typography>

        <Typography variant="body1" paragraph>
          All content on the Website, including text, graphics, logos, and images, is the property
          of ShopX and is protected by copyright laws. You may not reproduce, distribute, or
          create derivative works from this content without permission.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Limitation of Liability
        </Typography>

        <Typography variant="body1" paragraph>
          ShopX is not responsible for any damages or losses resulting from your use of the Website.
          The Website is provided "as is" without warranties of any kind.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Governing Law
        </Typography>

        <Typography variant="body1" paragraph>
          These Terms are governed by the laws of your jurisdiction.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions about these Terms or the Website, please contact us at
          info@shopx.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfUse;
