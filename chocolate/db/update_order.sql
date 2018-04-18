UPDATE orders
    SET
        order_date = $3,
        order_price = $4,
        payment_type = $5
    WHERE user_id = $2
    AND id = $1
;