import styled from 'styled-components';



const SectionStatistics = styled.section`
    width: 350px;
    height: 140px;
    margin: 0 auto;
    border: solid black 1px; 
`;

const H2Title = styled.h2`
    text-transform: uppercase;
    color: #000000;
    text-align: center;
`;

const UlStatlist = styled.ul`
    height: 70px;
    display: flex;
    padding: 0px;
`;

const LiItem = styled.li `
    width: 70px;
    background-color: #231234;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: 10px; 
`;

const SpanLabel = styled.span`
  color: #ffffff;
  font-size: 13px;
`;

const SpanPercentage = styled.span`
  color: #ffffff;
  font-size: 20px;
`;

function Statistics(props) {
    const statistics = props.statistics;
    const viewStatistics = statistics.map((statistic) =>
        <LiItem key={statistic.id}>
            <SpanLabel>{statistic.label}</SpanLabel>
            <SpanPercentage>{statistic.percentage}%</SpanPercentage>
        </LiItem>
    );
    return <SectionStatistics>
        <H2Title>Upload stats</H2Title>
        <UlStatlist>
        {viewStatistics}
      </UlStatlist>
    </SectionStatistics>
}

export default Statistics;