const FeedbackOptions = (state, handleBtnClick) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <div>
              <button type="button" onClick={() => { handleBtnClick() }}>Good</button>
        <button type="button">Netural</button>
        <button type="button">Bad</button>
      </div>
    </>
  );
};
export default FeedbackOptions;
