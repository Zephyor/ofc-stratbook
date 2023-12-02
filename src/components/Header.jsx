import OFC from '../assets/Logo_Defaut_Transparent.png';
import CS2 from '../assets/CS2.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className='fade-in' style={containerStyle}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={OFC} alt='OFC Logo' style={logoStyle} />
        </Link>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>StratBook OldFriendClub</h1>
        </div>
        <img src={CS2} alt='CS2 Logo' style={cslogoStyle} />
      </div>
    </header>
  );
};

const headerStyle = {
  background: '#22303B',
  color: '#F5AF0D',
  textAlign: 'center',
  padding: '1rem',
  left: 0,
  position: 'relative',
  top: 0,
  width: '100%',
  zIndex: 1000,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
};

const logoStyle = {
  width: '60px',
  marginRight: '10px',
};

const cslogoStyle = {
  width: '60px',
  borderRadius: '50%',
  marginRight: '2rem',
};

const titleContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  margin: 0,
};

export default Header;
