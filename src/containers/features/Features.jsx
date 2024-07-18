import { Feature } from '../../components';
import { featuresData } from '../../constants/data';
import './features.css';

export const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((data) => (
          <Feature key={data.title} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  );
};
