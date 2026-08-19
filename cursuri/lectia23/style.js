const baza = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
};

export function creazaStilButon(tip) {
  const culori = {
    baza,
    succes: {
      ...baza,
      backgroundColor: 'green',
    },
    eroare: {
      ...baza,
      backgroundColor: 'red',
    },
  };

  return culori[tip] || culori.baza;
}
