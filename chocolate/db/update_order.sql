UPDATE orders
    SET
        order_number = $3,
        order_date = $4,
        quantity = $5,
        price = $6,
        sales_tax = $7,
        total = $8,
        payment_type = $9
    WHERE user_id = $2
    AND id = $1
;