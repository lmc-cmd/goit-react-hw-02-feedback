const FeedbackOptions = ({ handleBtnClick}) => {

  return (
    <>
      <h1>Please leave feedback</h1>
      <div >
        <button onClick={handleBtnClick} type="button" datatype="good">Good</button>
        <button onClick={handleBtnClick} type="button" datatype="neutral">Neutral</button>
        <button onClick={handleBtnClick} type="button" datatype="bad">Bad</button>
      </div>
    </>
  );
};
export default FeedbackOptions;
