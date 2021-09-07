-- Replace with your SQL Query
SELECT film.title
FROM film
JOIN film_actor AS fa1
ON film.film_id = fa1.film_id
JOIN film_actor AS fa2
ON film.film_id = fa2.film_id
WHERE fa1.actor_id = 105 AND fa2.actor_id = 122;
