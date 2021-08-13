-- Create your SELECT statement here
SELECT 
    RANK() OVER (ORDER BY SUM(points) DESC) AS rank,
    CASE
      WHEN clan = '' THEN '[no clan specified]'
      ELSE clan
    END,
    SUM(points) as total_points,
    COUNT(name) as total_people
FROM people
GROUP BY clan;
