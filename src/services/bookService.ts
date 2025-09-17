import { Book } from "../models/bookModel";

const books: Book[] = [
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", isBorrowed: false },
    { id: "2", title: "1984", author: "George Orwell", genre: "Dystopian", isBorrowed: false },
    { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", isBorrowed: false },
];

// Get all books
export const getAllBooks = (): Book[] => {
    return structuredClone(books);
};

// Get book by ID
export const getBookById = (id: string): Book | null => {
    const book = books.find(b => b.id === id);
    return book ? structuredClone(book) : null;
};

// Add a new book
export const addBook = (
    bookData: Omit<Book, "id" | "isBorrowed" | "borrowerId" | "dueDate">
): Book => {
    if (!bookData.title || !bookData.author || !bookData.genre) {
        throw new Error("Missing required fields: title, author, and genre are required");
    }

    const newBook: Book = {
        id: (Math.random() * 10000).toFixed(0),
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        isBorrowed: false,
    };

    books.push(newBook);
    return newBook;
};

// Update existing book
export const updateBook = (id: string, bookData: Partial<Book>): Book | null => {
    const book = books.find(b => b.id === id);
    if (!book) return null;

    const safeUpdate = { ...bookData };
    delete safeUpdate.id;
    delete safeUpdate.isBorrowed;
    delete safeUpdate.borrowerId;
    delete safeUpdate.dueDate;

    Object.assign(book, safeUpdate);
    return structuredClone(book);
};

// Delete a book
export const deleteBook = (id: string): boolean => {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
};

// Borrow a book
export const borrowBook = (id: string, borrowerId: string): Book | null => {
    const book = books.find(b => b.id === id);
    if (!book || book.isBorrowed) return null;

    book.isBorrowed = true;
    book.borrowerId = borrowerId;
    book.dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

    return structuredClone(book);
};

// Return a book
export const returnBook = (id: string): Book | null => {
    const book = books.find(b => b.id === id);
    if (!book || !book.isBorrowed) return null;

    book.isBorrowed = false;
    delete book.borrowerId;
    delete book.dueDate;

    return structuredClone(book);
};

// Get book recommendations (first 3 books)
export const getRecommendations = (): Book[] => {
    return structuredClone(books.slice(0, 3));
};
