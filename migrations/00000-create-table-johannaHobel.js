exports.up = async (sql) => {
  await sql`
    CREATE TABLE johannaHobel (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      title varchar(40) NOT NULL,
			client varchar(40) NOT NULL,
			date varchar(40) NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE johannaHobel
  `;
};
