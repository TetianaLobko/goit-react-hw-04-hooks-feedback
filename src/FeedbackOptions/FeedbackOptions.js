import React from "react";
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
        className={s.button}
          type="button"
          key={index}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
