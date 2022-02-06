function Statistics(props) {
    const statistics = props.statistics;
    const viewStatistics = statistics.map((statistic) =>
        <li key={statistic.id} className="item">
            <span className="label">{statistic.label}</span>
            <span classname="percentage">{statistic.percentage}</span>
        </li>
    );

    return <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
        {viewStatistics}
      </ul>
    </section>
}

export default Statistics;