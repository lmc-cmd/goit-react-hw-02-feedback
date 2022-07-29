import PropTypes from 'prop-types'
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ handleBtnClick }) => {

  return (
    <>
      <div className={s["feedBack-container"]}>
        <button className={s["feddBtn"]} onClick={handleBtnClick} type="button" datatype="good">Good</button>
        <button className={s["feddBtn"]} onClick={handleBtnClick} type="button" datatype="neutral">Neutral</button>
        <button className={s["feddBtn"]} onClick={handleBtnClick} type="button" datatype="bad">Bad</button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func.isRequired
}

export default FeedbackOptions;
