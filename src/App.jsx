import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MapStrats from './scenes/MapStrats';
import MapCard from './components/MapCard';
import overpassImage from './assets/Overpass.jpg';
import nukeImage from './assets/Nuke.png';
import infernoImage from './assets/Inferno.jpeg';
import anubisImage from './assets/Anubis.jpg';
import ancientImage from './assets/Ancient.jpg';
import vertigoImage from './assets/Vertigo.png';
import mirageImage from './assets/Mirage.png';
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import './App.css';

const maps = [
  { id: 'overpass', mapName: 'Overpass', image: overpassImage },
  { id: 'nuke', mapName: 'Nuke', image: nukeImage },
  { id: 'inferno', mapName: 'Inferno', image: infernoImage },
  { id: 'anubis', mapName: 'Anubis', image: anubisImage },
  { id: 'ancient', mapName: 'Ancient', image: ancientImage },
  { id: 'vertigo', mapName: 'Vertigo', image: vertigoImage },
  { id: 'mirage', mapName: 'Mirage', image: mirageImage },
];

function App() {
  return (
    <div className='body'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <div
                style={{
                  margin: '0 auto',
                  marginTop: '3rem',
                  maxWidth: '85%',
                }}
              >
                <Grid
                  container
                  spacing={3}
                  justifyContent='center'
                  alignItems='center'
                  style={{ textAlign: 'center' }}
                >
                  {maps.map((map) => (
                    <Grid item key={map.id} xs={12} sm={6} md={4} lg={3}>
                      <Link to={`/maps/${map.id}`} style={linkStyle}>
                        <MapCard mapName={map.mapName} image={map.image} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </div>
            }
          />
          {maps.map((map) => (
            <Route
              key={map.id}
              path={`/maps/${map.id}`}
              element={<MapStrats mapName={map.mapName} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export default App;
