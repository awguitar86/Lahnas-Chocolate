SELECT * FROM order_items
    WHERE user_id = $1
    AND order_id = $2
    ORDER BY id
;