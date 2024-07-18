import { Feature } from '../../components';
import { feature } from '../../constants/data';
import './whatGPT3.css';

export const WhatGpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        {feature
          .filter((item) => item.id === 1)
          .map((item) => (
            <Feature key={item.id} title={item.title} text={item.text} />
          ))}
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        {feature
          .filter((item) => item.id !== 1)
          .map((item) => (
            <Feature key={item.id} title={item.title} text={item.text} />
          ))}
      </div>
    </div>
  );
};
