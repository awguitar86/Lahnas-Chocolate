UPDATE orders
    SET
        product_id = $3,
        order_number = $4,
        order_date = $5,
        quantity = $6,
        price = $7,
        sales_tax = $8,
        total = $9,
        payment_type = $10
    WHERE user_id = $2
    AND id = $1
;