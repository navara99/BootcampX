SELECT students.name, cohorts.name, cohorts.start_date, students.start_date
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.start_date <> students.start_date
ORDER BY cohorts.start_date;