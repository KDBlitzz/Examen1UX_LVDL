import Image from '../atoms/Image';
import BannerContent from '../molecules/BannerContent';

const BannerDestacado = ({ title, altText, width = 1200, height = 500 }) => (
  <div className="BannerDestacado">
     <Image
        src={"../Imagenes/gumball.png"}
        alt={altText}
        width={width}
        height={height}
      />
    <BannerContent title={title} buttonLabel="Reproducir" />
  </div>
);
export default BannerDestacado;