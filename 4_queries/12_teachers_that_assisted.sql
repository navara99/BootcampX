SELECT DISTINCT teachers.name AS teacher , cohorts.name AS cohort
FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN assignments ON assignment_id = assignments.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name;