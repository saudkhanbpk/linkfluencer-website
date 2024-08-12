import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const Card = ({ title, description, icon, onClick }: CardProps) => (
  <Paper elevation={1} sx={{ p: 3, borderRadius: 3, textAlign: 'center', position: 'relative', height: '200px' }}>
    <Box sx={{ fontSize: 50, color: 'primary.main' }}>
      {icon}
    </Box>
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
      {description}
    </Typography>
    <IconButton
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </IconButton>
  </Paper>
);

export default Card;