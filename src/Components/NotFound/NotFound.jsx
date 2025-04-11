import React, { useState, useEffect } from 'react';
import notFound from '../../assets/Images/notFound.png';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'OOPs! الصفحة اللي بتدور عليها ضايعة زي واجباتك...',
    };
  }

  // محاكاة تأثير الأنيميشن
  componentDidMount() {
    this.animateText();
  }

  animateText = () => {
    const textElement = document.querySelector('.animated-message');
    let index = 0;
    const message = this.state.message;
    textElement.innerHTML = '';

    const interval = setInterval(() => {
      textElement.innerHTML += message[index];
      index++;

      if (index === message.length) {
        clearInterval(interval);
      }
    }, 100); // تأثير الكتابة بمعدل 100 مللي ثانية لكل حرف
  };

  render() {
    return (
      <div className="not-found-container">
        <div className="image-container">
          <img
            src={notFound}
            alt="Not Found"
            className="notFound-img"
          />
          <div className="text-overlay">
            <h1 className="animated-message">OOPs! الصفحة اللي بتدور عليها ضايعة زي واجباتك...</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;


