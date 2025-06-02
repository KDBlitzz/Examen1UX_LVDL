import React, { useState } from 'react';
import BannerDestacado from './BannerDestacado';
import { Box, IconButton, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const CarruselDestacado = ({ banners, dotsOffset = { left: '50%', transform: 'translateX(-50%)' } }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = banners.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <BannerDestacado
        title={banners[activeStep].title}
        altText={banners[activeStep].altText}
        imageSrc={banners[activeStep].imageSrc}
      />

      {/* Botón izquierda */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '8px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      {/* Botón derecha */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '8px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots con posición por píxeles */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          ...dotsOffset
        }}
      >
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          sx={{
            backgroundColor: 'transparent',
            '.MuiMobileStepper-dot': {
              backgroundColor: 'gray'
            },
            '.MuiMobileStepper-dotActive': {
              backgroundColor: 'white'
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default CarruselDestacado;
