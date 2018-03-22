INSERT INTO orders (product_id, user_id, order_number, order_date, quantity, price, sales_tax, total, payment_type)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
;

-- SELECT DISTINCT * FROM orders
--     WHERE product_id = $1
--     AND user_id = $2
--     AND order_number = $3
--     AND order_date = $4
--     AND quantity = $5
--     AND price = $6
--     AND sales_tax = $7
--     AND total = $8
--     AND payment_type = $9
-- ;