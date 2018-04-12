SELECT * FROM orders
    WHERE user_id = $1
    AND order_number = $2
    ORDER BY id
;