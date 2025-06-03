import Title from "../atoms/Title";  
import Button from "../atoms/Button"; 

const BannerContent = ({ title, buttonLabel, desc }) => (
  <div className="bannerContent">
    <Title text={title} />
    {desc && <p className="bDescription">{desc}</p>}
    <Button label={buttonLabel} />
  </div>
);

export default BannerContent;
