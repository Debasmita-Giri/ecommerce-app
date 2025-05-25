import React from 'react';
import { Container, Typography, Paper, Card, CardContent } from '@mui/material';

const containerStyle = {
  marginTop: '16px',
  marginBottom: '16px',
};

const paperStyle = {
  padding: '24px',
};

const cardStyle = {
  backgroundColor: '#f5f5f5',
  marginBottom: '16px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '40px',
  textAlign: 'center',
};

const JobsSection = () => {
  return (
    <Container style={containerStyle} maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h1" gutterBottom style={titleStyle}>
          Jobs at ShopX
        </Typography>

        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h4" color="textSecondary">
              Open Jobs: 0
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="body1" paragraph>
          Join our team and explore exciting career opportunities at ShopX. We are always on the lookout
          for talented individuals who are passionate about what they do.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Job Opportunities
        </Typography>

        <Typography variant="body1" paragraph>
          We offer a variety of job opportunities, including:
          - Internships
          - Part-time positions
          - Full-time positions
          - Contract roles
        </Typography>

        <Typography variant="h5" gutterBottom>
          Job Categories
        </Typography>

        <Typography variant="body1" paragraph>
          Our job categories include, but are not limited to:
          - Backend Development
          - Frontend Development
          - Database Administration
          - Marketing and Sales
          - Customer Support
          - Design and UI/UX
          - Finance and Accounting
        </Typography>

        <Typography variant="h5" gutterBottom>
          How to Apply
        </Typography>

        <Typography variant="body1" paragraph>
          To apply for a job at ShopX or inquire about open positions, please send your resume and cover
          letter to careers@shopx.com. Be sure to specify the role you're interested in and include any
          relevant details about your experience.
        </Typography>

        <Typography variant="body1" paragraph>
          We look forward to welcoming new talent to our team and shaping the future of ecommerce together.
        </Typography>
      </Paper>
    </Container>
  );
};

export default JobsSection;
