INSERT INTO orders (user_id, order_date)
    VALUES
        ($1, $2)
;

-- SELECT DISTINCT * FROM orders
--     AND user_id = $2
--     AND order_date = $4
-- ;