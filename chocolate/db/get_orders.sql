SELECT * FROM orders
    WHERE user_id = $2
    ORDER BY id
;