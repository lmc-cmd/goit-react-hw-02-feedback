const FeedbackOptions = (state, handleBtnClick) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <div>
              <button onClick={() => {handleBtnClick()}} type="button" >Good</button>
        <button type="button">Netural</button>
        <button type="button">Bad</button>
      </div>
    </>
  );
};
export default FeedbackOptions;
