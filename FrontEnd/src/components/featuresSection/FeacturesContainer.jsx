import FeaturesItem from "./FeaturesItem"; 
import '../featuresSection/FeaturesContainer.css';

const FeaturesContainer = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeaturesItem
        imgSrc={"./images/icon-chat.webp"}
        imgAlt={"chat Icon"}
        titleText={"You are our #1 priority"}
        mainText={
          " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
        }
      />
      <FeaturesItem
        imgSrc={"./images/icon-money.webp"}
        imgAlt={"Money Icon"}
        titleText={"More savings means higher rates"}
        mainText={
          " The more you save with us, the higher your interest rate will be!"
        }
      />
      <FeaturesItem
        imgSrc={"./images/icon-security.webp"}
        imgAlt={"security Icon"}
        titleText={"Security you can trust"}
        mainText={
          "   We use top of the line encryption to make sure your data and money is always safe. "
        }
      />
    </section>
  );
};

export default FeaturesContainer;