import { Grid, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white'} sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
      
        <Typography className='pb-5' variant="h6" gutterBottom>
          Home
        </Typography>
        <Link href="/" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          Shop
        </Typography>
        </Link>
        <Link href="/about" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          About Us
        </Typography>
        </Link>
        <Link href="/contact" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          Contact Us
        </Typography>
        </Link>
        {/* <Typography variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Partners
        </Typography> */}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          More
        </Typography>
        <Link href="/affiliate" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
        Affiliate
        </Typography>
        </Link>
        <Link href="/jobs" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
        Jobs
        </Typography>
        </Link>
        <Link href="/seller" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
        Become a Seller
        </Typography>
        </Link>
        {/* <Typography variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography> */}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Consumer Policy
        </Typography>
        <Link href="/cancellation&return" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          Cancellation & Returns
        </Typography>
        </Link>
        <Link href="/terms-condition" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          Terms Of Use
        </Typography>
        </Link>
        <Link href="/privacy-policy" color="inherit" underline="none" gutterBottom>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Follow us
        </Typography>
        {/* Facebook */}
        <Link href="#" color="inherit" underline="none" gutterBottom>
          <FacebookIcon sx={{ fontSize: 30 }} />
          <Typography variant="body2" component="p" gutterBottom>
          
          </Typography>
        </Link>
        {/* Instagram */}
        <Link href="#" color="inherit" underline="none" gutterBottom>
          <InstagramIcon sx={{ fontSize: 30 }} />
          <Typography variant="body2" component="p" gutterBottom>
            {/* Instagram */}
          </Typography>
        </Link>
        {/* Twitter */}
        <Link href="#" color="inherit" underline="none" gutterBottom>
          <TwitterIcon sx={{ fontSize: 30 }} />
          <Typography variant="body2" component="p" gutterBottom>
            {/* Twitter */}
          </Typography>
        </Link>
      </Grid>




      <Grid className='pt-5' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; {new Date().getFullYear()} ShopX. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love <FavoriteIcon color="error" fontSize="small" />
        </Typography>
        {/* <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default Footer;
