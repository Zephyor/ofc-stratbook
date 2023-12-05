const infernoStrategies = [
  {
    title: 'CT Pistol Round B Stack',
    content: (
      <ul>
        <li style={{ marginBottom: '0.6rem' }}>
          <strong>Rôle 1</strong> (Meilleur Spawn A) - Achète Kit / Smoke, Drop
          sa smoke à un joueur B + Prend l'info M2 et joue retake
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          <strong>Rôle 2</strong> (Meilleur Spawn B) - Achète Kevlar + Joue
          Sandbags et se tape à la mort avec le rôle 3 Guardian, backup côté
          spawn
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          <strong>Rôle 3</strong> (2ème Spawn B) - Achète Kevlar + Joue Fallen
          et se tape à la mort avec le rôle 2
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          <strong>Rôle 4</strong> (3ème Spawn) - Achète Kevlar + Joue C3
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          <strong>Rôle 5</strong> (4ème Spawn) - Achète Kevlar + Joue C4
        </li>
      </ul>
    ),
    side: 'CT',
  },
  { title: 'T Pistol Split A', content: 'A revoir', side: 'T' },
  // Add more strategies as needed
];

export default infernoStrategies;
