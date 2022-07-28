const Statistics = ({ state, total}) => {
    return <div >
        <h1>Statistics</h1>
        <p>Good: {state.good}</p>
        <p>Netural: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {total}</p>
</div>
}
export default Statistics