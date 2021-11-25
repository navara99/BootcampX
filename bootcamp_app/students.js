const { Pool } = require("pg");

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
}

const pool = new Pool(config);

const [cohort, limit] = process.argv.slice(2);
const values = [`%${cohort}%`, limit];

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
  .then(res => {
    res.rows.forEach((student) => {
      const { name, id, cohort } = student;
      console.log(`${name} has an id of ${id} and was in the ${cohort} cohort.`)
    });
  })
  .catch(err => console.error('query error', err.stack));