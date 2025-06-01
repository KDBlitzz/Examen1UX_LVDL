import Title from "../atoms/Title";  
import Button from "../atoms/Button"; 

const BannerContent = ({ title, buttonLabel }) => (
  <div className="bannerContent">
    <Title text={title} />
    <Button label={buttonLabel} />
  </div>
);

export default BannerContent;