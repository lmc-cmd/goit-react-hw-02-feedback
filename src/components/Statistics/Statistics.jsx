const Statistics = ({ state, total, positivePercentage, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    return <div > 
        <h1>Statistics</h1>
        <p>Good: {state.good}</p>
        <p>Netural: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p onChange={countTotalFeedback()}>Total: {total}</p>
        <p onChange={countPositiveFeedbackPercentage()}>Positive feedback: {positivePercentage}%</p>
</div>
}
export default Statistics