INSERT INTO products (name, description, price)
    VALUES
        ($1, $2, $3)
;

-- SELECT DISTINCT * FROM products
--     WHERE name = $1
--     AND description = $2
--     AND price = $3
-- ;