import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContinueWatchingItem from '../molecules/ContinueWatchingItem';

const ContinueWatchingCarousel = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  let visibleCount = 4;
  if (isXs) visibleCount = 1;
  else if (isSm) visibleCount = 2;
  else if (isMd) visibleCount = 3;

  const getVisibleItems = () => {
    const total = items.length;
    const end = startIndex + visibleCount;
    if (end <= total) return items.slice(startIndex, end);

    const remaining = items.slice(startIndex, total);
    const faltan = visibleCount - remaining.length;
    const anteriores = items.slice(Math.max(0, total - visibleCount), total - remaining.length);
    return [...anteriores, ...remaining].slice(-visibleCount);
  };

  const handleNext = () => {
    const nextIndex = startIndex + visibleCount;
    if (nextIndex < items.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - visibleCount;
    setStartIndex(prevIndex >= 0 ? prevIndex : 0);
  };

  const visibleItems = getVisibleItems();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2, backgroundColor: 'black' }}>
      <IconButton onClick={handlePrev} disabled={startIndex === 0} sx={{ color: 'white' }}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, overflow: 'hidden' }}>
        {visibleItems.map((item, index) => (
          <ContinueWatchingItem
            key={index}
            src={item.src}
            title={item.title}
            age={item.age}
            progress={item.progress}
          />
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

export default ContinueWatchingCarousel;