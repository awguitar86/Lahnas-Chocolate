UPDATE products
    SET
        name = $2,
        description = $3,
        price = $4
    WHERE id = $1
;