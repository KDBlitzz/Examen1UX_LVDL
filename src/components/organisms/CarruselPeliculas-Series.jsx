import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '../molecules/Tarjeta';
import { useEffect } from 'react';

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
  useEffect(() => {
    setStartIndex(0);
  }, [visibleCount]);

const getVisibleItems = () => {
  const total = items.length;
  const end = startIndex + visibleCount;

  if (end <= total) {
    // Caso normal: hay suficientes elementos
    return items.slice(startIndex, end);
  }

  // Caso final: no hay suficientes elementos desde startIndex
  const slice = items.slice(startIndex, total);
  const faltan = visibleCount - slice.length;

  // Tomar del final sin exceder total ni repetir
  const complement = items.slice(Math.max(0, total - visibleCount), total - slice.length);
  return [...complement, ...slice];
};

  const handleNext = () => {
    const siguiente = startIndex + visibleCount;
    if (siguiente < items.length) {
      setStartIndex(siguiente);
    }
  };

  const handlePrev = () => {
    const anterior = startIndex - visibleCount;
    setStartIndex(anterior >= 0 ? anterior : 0);
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
          <Box
          key={index}
          sx={{
            flex: 1,
            minWidth: 0,
          }}
          >
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
        disabled={startIndex + visibleCount >= items.length}
        sx={{ color: 'white' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarouselPeliculas;



