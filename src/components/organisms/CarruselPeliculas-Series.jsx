import React, { useState, useEffect } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '../molecules/Tarjeta';

const CarouselPeliculas = ({ items, showRank = false }) => {
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  let visibleCount = 6;
  if (isXs) visibleCount = 2;
  else if (isSm) visibleCount = 3;
  else if (isMd) visibleCount = 4;

  const scrollStep = visibleCount - 1; // Avanza dejando uno repetido

  // Limitar a los 10 primeros elementos
  const topItems = items.slice(0, 10);

  useEffect(() => {
    setStartIndex(0);
  }, [visibleCount]);

  const getVisibleItems = () => {
    return topItems.slice(startIndex, startIndex + visibleCount);
  };

  const handleNext = () => {
    const maxStart = topItems.length - visibleCount;
    const nextIndex = Math.min(startIndex + scrollStep, maxStart);
    setStartIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(startIndex - scrollStep, 0);
    setStartIndex(prevIndex);
  };

  const visibleItems = getVisibleItems();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2, backgroundColor: 'black' }}>
      <IconButton onClick={handlePrev} disabled={startIndex === 0} sx={{ color: 'white' }}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          overflow: 'hidden',
          gap: 1,
          justifyContent: 'flex-start',
        }}
      >
        {visibleItems.map((item, index) => (
          <Box key={index} sx={{ flex: 1, minWidth: 0 }}>
            <Card
              src={item.src}
              alt={item.alt}
              rank={startIndex + index + 1}
              showRank={showRank}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleNext}
        disabled={startIndex + visibleCount >= topItems.length}
        sx={{ color: 'white' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarouselPeliculas;