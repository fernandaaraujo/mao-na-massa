import React, { Component } from 'react';
import iphoneX from './iphoneX.png';
import './TemplateHomePage.css';

class TemplateHomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__header">
          <img src={iphoneX} className="iphoneX__image" alt="iPhone X" />
        </div>
        <div className="home-page__container">
          <div className="home-page__buy">
            <button type="button">Buy now!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateHomePage;
