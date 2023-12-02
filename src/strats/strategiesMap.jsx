import overpassStrategies from './overpassStrats';
import vertigoStrategies from './vertigoStrats';
import mirageStrategies from './mirageStrats';
import ancientStrategies from './ancientStrats';
import infernoStrategies from './infernoStrats';
import nukeStrategies from './nukeStrats';
import anubisStrategies from './anubisStrats';

const strategiesMap = {
  Overpass: overpassStrategies,
  Vertigo: vertigoStrategies,
  Mirage: mirageStrategies,
  Ancient: ancientStrategies,
  Inferno: infernoStrategies,
  Nuke: nukeStrategies,
  Anubis: anubisStrategies,
};

export default strategiesMap;
