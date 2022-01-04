SELECT count(assistance_requests.*) as total_assistances, name
FROM assistance_requests
JOIN teachers on teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.id;