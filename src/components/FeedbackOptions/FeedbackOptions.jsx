const FeedbackOptions = ({ handleBtnClick}) => {

  return (
    <>
      <h1>Please leave feedback</h1>
      <div >
        <button onClick={handleBtnClick} type="button" datatype="Good">Good</button>
        <button onClick={handleBtnClick} type="button" datatype="Neutral">Neutral</button>
        <button onClick={handleBtnClick} type="button" datatype="Bad">Bad</button>
      </div>
    </>
  );
};
export default FeedbackOptions;
