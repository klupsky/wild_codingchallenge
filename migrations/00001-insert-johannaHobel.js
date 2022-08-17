const johannaHobel = [
  {
    id: 1,
    title: 'Everyday Flowers',
    client: 'Vouge',
    date: 'Jun 2019',
  },
  {
    id: 2,
    title: 'The wilder night',
    client: 'Wild',
    date: 'Dec 2019',
  },
  {
    id: 3,
    title: 'Smooth Memories',
    client: 'Chanel',
    date: 'Feb 2020',
  },
  {
    id: 4,
    title: 'The future universe',
    client: 'On',
    date: 'Apr 2020',
  },
  {
    id: 5,
    title: 'She was born urban',
    client: 'Si',
    date: 'Dec 2021',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO johannaHobel ${sql(johannaHobel, 'title', 'client', 'date')}
  `;
};

exports.down = async (sql) => {
  for (const foto of johannaHobel) {
    await sql`
    DELETE FROM johannaHobel
    WHERE
title = ${foto.title}`;
  }
};
