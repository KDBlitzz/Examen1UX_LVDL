import React, { useState } from 'react';
import { Box, IconButton, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import BannerDestacado from './BannerDestacado';
import { motion, AnimatePresence } from 'framer-motion';

const CarruselDestacado = ({
  banners,
  dotsOffset = { left: '50%', transform: 'translateX(-50%)' }
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = banners.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px', // Asegura altura mínima
        backgroundColor: '#000', // Fondo mientras carga
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: 'relative', // ← cambio clave: no usar absolute aquí
            width: '100%',
          }}
        >
          <BannerDestacado
            title={banners[activeStep].title}
            altText={banners[activeStep].altText}
            imageSrc={banners[activeStep].imageSrc}
          />
        </motion.div>
      </AnimatePresence>

      {/* Flechas */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '8px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 2,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '8px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 2,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '100px',
          display: 'flex',
          ...dotsOffset,
          zIndex: 2,
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
              backgroundColor: 'gray',
              width: '10px',
              height: '10px',
            },
            '.MuiMobileStepper-dotActive': {
              backgroundColor: 'white',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CarruselDestacado;
