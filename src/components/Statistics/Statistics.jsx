import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
const Statistics = ( {state, total, positivePercentage }) => {
  return (
    <div className={s['stats-container']}>
      <p>Good: {state.good}</p>
      <p>Netural: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,

    total: PropTypes.number.isRequired,

    positivePercentage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
}

export default Statistics;
