import React from 'react';
import { Container, Typography, Paper, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const containerStyle = {
  marginTop: '16px',
  marginBottom: '16px',
};

const paperStyle = {
  padding: '24px',
  textAlign: 'center',
};

const iconStyle = {
  fontSize: '48px',
  color: 'red', // You can choose a color that fits your design
};

const NotFound = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <IconButton aria-label="Not Found" disabled>
          <ErrorOutlineIcon style={iconStyle} />
        </IconButton>

        <Typography variant="h4" gutterBottom>
          404 Not Found
        </Typography>

        <Typography variant="body1" paragraph>
          The page you are looking for could not be found. It may have been moved or no longer exists.
        </Typography>

        <Typography variant="body1" paragraph>
          Please check the URL for typos or{' '}
          <Button component={Link} to="/" variant="contained" color="primary">
            Return to Home
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default NotFound;
