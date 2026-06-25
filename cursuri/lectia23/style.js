export function creazaStilButon(tip) {
  const culori = {
    baza: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
    },
    succes: {
      ...culori.baza,
      backgroundColor: 'green',
    },
    eroare: {
      ...culori.baza,
      backgroundColor: 'red',
    },
  };

  return culori[tip] || culori.baza;
}
