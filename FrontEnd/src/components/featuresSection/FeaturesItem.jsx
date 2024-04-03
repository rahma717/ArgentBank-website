
import PropTypes from 'prop-types';
import '../featuresSection/FeaturesItem.css';

const FeaturesItem = ({ imgSrc, imgAlt, titleText, mainText }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{titleText}</h3>
      <p>{mainText}</p>
    </div>
  );
};

FeaturesItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
};

export default FeaturesItem;