SELECT avg(duration) as average_total_duration
FROM ( SELECT sum(completed_at - started_at) as duration
      FROM assistance_requests
      JOIN students on student_id = students.id
      JOIN cohorts on cohort_id = cohorts.id
      GROUP BY cohorts.id
) as cohort_total_durations;