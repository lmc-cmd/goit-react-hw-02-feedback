import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleBtnClick }) => {
  return (
    <>
      <div className={s['feedBack-container']}>
        {options.map(stateEl => (
          <button
            key={nanoid()}
            className={s['feddBtn']}
            onClick={handleBtnClick}
            type="button"
            datatype={stateEl}
          >
            {stateEl}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
