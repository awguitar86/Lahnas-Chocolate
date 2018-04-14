DROP TABLE IF EXISTS products, users, orders, order_items CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price DECIMAL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    company TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip_code INT,
    phone BIGINT,
    email TEXT unique,
    password TEXT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    order_date VARCHAR,
    order_price DECIMAL
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    order_id INT REFERENCES orders (id),
    product_id INT REFERENCES products (id),
    quantity INT,
    price DECIMAL,
    sales_tax DECIMAL,
    total DECIMAL,
    payment_type TEXT
);

INSERT INTO products (name, description, price)
    VALUES
        ('Rocky Road', 'A delicious 3-ounce brick of marshmallow, chocolate, coconut, and roasted pecans.', 3.75),
        ('Pretzel Rod', 'A fresh 8″  pretzel rod enrobed in caramel and dipped in chocolate.', 2.49),
        ('Lahna Bar', 'A circular bar of chocolate with almonds, coconut, and pecans all over.', 2.49),
        ('Caramel Lollipop', 'Heaven on a stick. Handmade caramel dipped in chocolate.', 1.75),
        ('Chocolate Dipped Oreos', 'America’s favorite cookie smothered in special milk chocolate.', 0.60),
        ('Grandma’s Caramels', 'Florence’s original caramel wrapped in kiss paper.', 0.60),
        ('Grandma’s Licorice Carmels', 'This ample and incredibly smooth confection rivals all black licorice.', 0.60),
        ('Le Petite Box', 'This box conatins one piece each of the Sea Salt Caramel, Mint Truffle, Coconut Rough, and Pecan Turle.', 4.95),
        ('Half Pound Box', 'This box contains 3 Sea Salt Caramels, 3 Mint Truffles, 2 Almond Clusters, 2 Coconut Roughs, and 2 Pecan Turles.', 14.95),
        ('One Pound Box', 'This box contains 5 of each chocolate.', 29.95),
        ('Two Pound Box', 'This box contains 10 of each chocolate.', 59.95)
;

INSERT INTO users (first_name, last_name, company, address, city, state, zip_code, phone, email, password)
    VALUES
        ('Austin', 'Wright', 'The Wright Company', '123 Cool Ave', 'Layton', 'UT', 84041, 8015551234, 'austin@gmail.com', 'AustinWright'),
        ('Lahna', 'Prows', 'Lahna''s Chocolates', '10 Chocolate Lane', 'Bountiful', 'UT', 84123, 8011234567, 'lahnaschocolates@gmail.com', 'chocolate')
;

INSERT INTO orders (user_id, order_date, order_price)
    VALUES
        (1, '03/22/2018', 3.99),
        (1, '04/03/2018', 5.59),
        (2, '03/27/2018', 22.27)
;

INSERT INTO order_items (user_id, order_id, product_id, quantity, price, sales_tax, total, payment_type)
    VALUES
        ( 1, 1, 1, 1, 3.75, 0.24, 3.99, 'PayPal' ),
        ( 1, 2, 8, 2, 4.95, 0.64, 5.59, 'Mail' ),
        ( 2, 3, 2, 3, 2.49, 0.48, 7.95, 'On Delivery' ),
        ( 2, 3, 3, 1, 2.49, 0.16, 2.65, 'On Delivery' ),
        ( 2, 3, 5, 5, 0.60, 0.20, 3.20, 'On Delivery' ),
        ( 2, 3, 6, 5, 0.60, 0.20, 3.20, 'On Delivery' ),
        ( 2, 3, 8, 1, 4.95, 0.32, 5.27, 'On Delivery' )
;

