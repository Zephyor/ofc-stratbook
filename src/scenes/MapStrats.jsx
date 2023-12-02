import strategiesMap from '../strats/strategiesMap';
import Strat from '../components/Strat';

const MapStrats = ({ mapName }) => {
  // Get the strategy array based on the mapName
  const mapStrategies = strategiesMap[mapName] || [];
  console.log('mapName:', mapName);
  console.log('mapStrategies:', mapStrategies);

  return (
    <div style={{ margin: '1rem', color: '#fff' }}>
      <h2 style={{ color: '#FF7833', fontSize: '200%', marginLeft: '3rem' }}>
        {mapName} Strategies
      </h2>
      {mapStrategies.map((strategy) => (
        <Strat
          key={strategy.title}
          title={strategy.title}
          content={strategy.content}
        />
      ))}
    </div>
  );
};

export default MapStrats;
