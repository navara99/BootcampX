SELECT COUNT(*) AS total_assistance, teachers.name
FROM assistance_requests JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.id;
