import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Card from '@/components/specific/JoinCard';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();

  const handleInfluencerClick = () => {
    router.push('/signup/influencer');
  };

  const handleBrandClick = () => {
    router.push('/signup/brand');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, minHeight: '100vh' }}>
      <Typography variant="h2" fontWeight="bold" align="center">
        Join Linkfluencer
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4, maxWidth: '800px' }}>
        <Grid item xs={12} md={6}>
          <Card title="Influencer" description="Make Everyday A Pay Day" icon={<PersonIcon fontSize="inherit" />} onClick={handleInfluencerClick} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title="Brand" description="Take Your Brand To Public" icon={<StarIcon fontSize="inherit" />} onClick={handleBrandClick} />
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mt: 3 }}>
        Already have an account?{' '}
        <Button variant="text" color="primary">
          Log In
        </Button>
      </Typography>
    </Box>
  );
};

export default Signup;