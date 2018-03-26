SELECT * FROM orders
    WHERE user_id = $1
    AND id = $2
    ORDER BY id
;