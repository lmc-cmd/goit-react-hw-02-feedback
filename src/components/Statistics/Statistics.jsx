import s from '../Statistics/Statistics.module.css';
const Statistics = ({ state, total, positivePercentage }) => {
    return <div className={s["stats-container"]}> 
        <h1>Statistics</h1>
        <p>Good: {state.good}</p>
        <p>Netural: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
</div>
}
export default Statistics