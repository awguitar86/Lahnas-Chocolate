INSERT INTO order_items (user_id, order_id, product_id, quantity, price, sales_tax, total, payment_type)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)
;