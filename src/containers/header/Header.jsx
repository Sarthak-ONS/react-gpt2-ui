import React from "react";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something with GPT-4 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          repellendus. Necessitatibus quam at suscipit sunt accusamus nemo
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p> 1,600 people requested access a visit in last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={AI} alt="Ai" />
      </div>
    </div>
  );
};

export default Header;
