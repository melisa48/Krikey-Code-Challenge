SELECT SUM(item_price * quantity) AS total_sales
FROM sale_items
JOIN books ON sale_items.book_id = books.id
JOIN authors ON books.author_id = authors.id
WHERE authors.name = 'Lorelai Gilmore';