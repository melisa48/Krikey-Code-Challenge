CREATE TABLE sale_items (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id),
    customer_name TEXT NOT NULL,
    item_price DECIMAL(10,2) NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO sale_items (book_id, customer_name, item_price, quantity)
VALUES 
  (1, 'Alice', 12.99, 2),
  (2, 'Bob', 15.50, 1),
  (3, 'Charlie', 10.99, 3);

SELECT * FROM sale_items;



