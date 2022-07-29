const FeedbackOptions = ({ state, handleBtnClick, countTotalFeedback }) => {

  return (
    <>
      <h1>Please leave feedback</h1>
      <div >
        <button onClick={handleBtnClick} onChange={countTotalFeedback()} type="button">Good</button>
        <button  type="button">Netural</button>
        <button type="button">Bad</button>
      </div>
    </>
  );
};
export default FeedbackOptions;
