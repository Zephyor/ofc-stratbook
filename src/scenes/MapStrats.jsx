import strategiesMap from '../strats/strategiesMap';
import Strat from '../components/Strat';

const MapStrats = ({ mapName }) => {
  // Get the strategy array based on the mapName
  const mapStrategies = strategiesMap[mapName] || [];
  console.log('mapName:', mapName);
  console.log('mapStrategies:', mapStrategies);

  const tStrategies = mapStrategies.filter((strategy) => strategy.side === 'T');
  const ctStrategies = mapStrategies.filter(
    (strategy) => strategy.side === 'CT'
  );

  return (
    <div style={{ margin: '1rem', color: '#fff' }}>
      <h2 style={{ color: '#FF7833', fontSize: '200%', marginLeft: '3rem' }}>
        {mapName} Strategies
      </h2>
      <div
        style={{
          borderBottom: '2px solid #fff',
          margin: '1rem 0',
          borderColor: '#f1f1f1',
        }}
      ></div>

      {/* Bloc Strat T */}
      <h3 style={{ color: '#F5AF0D', marginTop: '1rem' }}>Terrorists (T)</h3>
      {tStrategies.map((strategy) => (
        <Strat
          key={strategy.title}
          title={strategy.title}
          content={strategy.content}
          side={strategy.side}
        />
      ))}
      <div
        style={{
          borderBottom: '2px solid #fff',
          margin: '1rem 0',
          borderColor: '#f1f1f1',
        }}
      ></div>

      {/* Bloc Strat CT */}
      <h3 style={{ color: '#F5AF0D', marginTop: '1rem' }}>
        Counter-Terrorists (CT)
      </h3>
      {ctStrategies.map((strategy) => (
        <Strat
          key={strategy.title}
          title={strategy.title}
          content={strategy.content}
          side={strategy.side}
        />
      ))}
    </div>
  );
};

export default MapStrats;
