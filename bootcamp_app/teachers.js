const { Pool } = require("pg");

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
};

const pool = new Pool(config);

const [cohort] = process.argv.slice(2);

pool.query(`
SELECT DISTINCT teachers.name AS teacher , cohorts.name AS cohort
FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`, [cohort])
  .then(res => {
    res.rows.forEach((data) => {
      const { teacher, cohort } = data;
      console.log(`${cohort}: ${teacher}`)
    });
  })
  .catch(err => console.error('query error', err.stack));

