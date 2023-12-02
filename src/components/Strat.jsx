import { useState } from 'react';

const Strat = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        borderColor: '#F5AF0D',
        padding: '1rem',
        marginBottom: '1rem',
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div
        onClick={toggleExpand}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#F1f1f1',
          fontSize: '120%',
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {isExpanded ? '▼' : '►'}
        </span>
      </div>
      {isExpanded && (
        <p style={{ marginTop: '0.5rem', fontSize: '130%' }}>{content}</p>
      )}
    </div>
  );
};

export default Strat;
