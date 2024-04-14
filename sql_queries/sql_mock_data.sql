INSERT INTO authors (name, email, date_of_birth)
VALUES 
  ('Jane Austen', 'jane@example.com', '1775-12-16'),
  ('George Orwell', 'george@example.com', '1903-06-25'),
  ('William Shakespeare', 'william@example.com', '1564-04-23'),
  ('Charles Dickens', 'charles@example.com', '1812-02-07'),
  ('Ernest Hemingway', 'ernest@example.com', '1899-07-21'),
  ('Mark Twain', 'mark@example.com', '1835-11-30'),
  ('J.K. Rowling', 'jk@example.com', '1965-07-31'),
  ('Stephen King', 'stephen@example.com', '1947-09-21'),
  ('Agatha Christie', 'agatha@example.com', '1890-09-15'),
  ('Lorelai Gilmore', 'gilmore@example.com', '1967-03-16');

INSERT INTO books (author_id, isbn, title)
VALUES 
  (1, '9780141439587', 'Pride and Prejudice'),
  (2, '9780451524935', '1984'),
  (3, '9780743477123', 'Romeo and Juliet');

INSERT INTO sale_items (book_id, customer_name, item_price, quantity)
VALUES 
  (1, 'Alice', 12.99, 2),
  (2, 'Bob', 15.50, 1),
  (3, 'Charlie', 10.99, 3);