import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import '../App.css';

const cardStyle = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  borderColor: '#F5AF0D',
  position: 'relative', // Add position relative to create a stacking context
  overflow: 'hidden',
};

const MapCard = ({ mapName, image }) => {
  return (
    <div style={{ margin: '0.1rem', height: '40vh' }}>
      <Card
        className='card'
        sx={{ ...cardStyle, minHeight: '80%', width: '85%' }}
      >
        <CardCover>
          <img
            src={image}
            loading='lazy'
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level='title-lg' textColor='#f1f1f1'>
            {mapName}
          </Typography>
        </CardContent>
        <div className='shine-overlay'></div>
      </Card>
    </div>
  );
};

export default MapCard;
