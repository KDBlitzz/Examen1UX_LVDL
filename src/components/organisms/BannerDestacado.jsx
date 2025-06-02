import Image from '../atoms/Image';
import BannerContent from '../molecules/BannerContent';

const BannerDestacado = ({ title, altText, imageSrc, width = 1200, height = 500 }) => (
  <div className="BannerDestacado">
    <Image
      src={imageSrc}
      alt={altText}
      width={width}
      height={height}
    />
    <BannerContent title={title} buttonLabel="Reproducir" />
  </div>
);

export default BannerDestacado;
