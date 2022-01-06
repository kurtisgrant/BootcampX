const { Pool } = require('pg');

let [cohort, limit] = process.argv.slice(2);
cohort = String(cohort + '%');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [cohort, limit])
  .then(res => {
    res.rows.forEach(row => console.log(`${row.name} has an id of ${row.student_id} and was in the ${row.cohort} cohort`));
    process.exit();
  })
  .catch(err => console.error('query error', err.stack));