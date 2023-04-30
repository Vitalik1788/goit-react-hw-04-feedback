import React from "react";
import PropTypes from 'prop-types';
import css from "../Statistic/Statistic.module.css";
import Notification from '../Notification/Notification';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  total === 0 ? (<Notification message={'There is no feedbacks'} />) : (<div>
    <ul className={css.stats_list}>
      <li className={css.stats_item}> Good: {good}</li>
      <li className={css.stats_item}> Neutral: {neutral}</li>
      <li className={css.stats_item}> Bad: {bad}</li>
    </ul>

    <ul className={css.total_list}>
      <li className={css.total_item}>Total: {total}</li>
      <li className={css.total_item}>Positive feedbacks: {positivePercentage}%</li>
    </ul>
  </div>
));

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
 

