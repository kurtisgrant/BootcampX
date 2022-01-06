const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let cohort = String(process.argv.slice(2)[0]);
console.log(cohort);

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers on teacher_id = teachers.id
JOIN students on student_id = students.id
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`, [cohort])
  .then(res => console.log(res.rows))
  .catch(err => console.error('query error', err.stack));