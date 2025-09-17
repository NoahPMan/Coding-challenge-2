# Author: Noah Manaigre

## Features
- Get all books or a single book by ID
- Add a new book (validates title, author, genre)
- Update or delete books
- Borrow and return books
- Get recommended books

## Tickets Implemented
- **Ticket 203:** Get book by ID endpoint
- **Ticket 205:** Validation for adding books (title, author, genre required, trims whitespace, returns clear errors)

## How to Run
1. Start the server:
```bash
npm run dev

2. curl -X POST http://localhost:3000/api/v1/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Dune","author":"Frank Herbert","genre":"Sci-Fi"}'
