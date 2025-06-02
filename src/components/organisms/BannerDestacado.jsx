import { motion } from 'framer-motion';
import Image from '../atoms/Image';
import BannerContent from '../molecules/BannerContent';

const BannerDestacado = ({ title, altText, imageSrc, width = 1200, height = 500 }) => {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="BannerDestacado" style={{ position: 'relative' }}>
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
      />
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <BannerContent title={title} buttonLabel="Reproducir" />
      </motion.div>
    </div>
  );
};

export default BannerDestacado;

