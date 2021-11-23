SELECT DISTINCT teachers.name AS teacher , cohorts.name AS cohort, COUNT(*) AS total_assistances 
FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.id, cohorts.id
ORDER BY teachers.name;