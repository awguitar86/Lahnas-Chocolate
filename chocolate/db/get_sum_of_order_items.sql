SELECT SUM(total) FROM order_items
WHERE order_id = $1
;