import strategiesMap from '../strats/strategiesMap';
import Strat from '../components/Strat';
import { Fragment } from 'react';

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
      {mapStrategies.map((strategy, index) => (
        <Fragment key={strategy.title}>
          {index > 0 && strategy.side !== mapStrategies[index - 1].side && (
            // Ajouter un séparateur si le côté a changé
            <div
              style={{
                borderBottom: '2px solid #fff',
                margin: '1rem 0',
                borderColor: '#FF7833',
              }}
            ></div>
          )}
          <Strat
            title={strategy.title}
            content={strategy.content}
            side={strategy.side}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default MapStrats;
