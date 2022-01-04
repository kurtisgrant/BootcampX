SELECT count(assistance_requests.*) as total_assistances, name
FROM assistance_requests
JOIN students on student_id = students.id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.id;