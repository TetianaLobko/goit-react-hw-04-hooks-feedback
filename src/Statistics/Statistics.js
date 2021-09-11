import React from "react";
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.stats}>
        <li className={s.good}>Good: {good}</li>
        <li className={s.neutral}>Neutral: {neutral}</li>
        <li className={s.bad}>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li className={s.percent}>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </>
  );
};

export default Statistics;
