import { Router } from "express";
import {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook,
    getRecommendations,
} from "../controllers/bookController";

const router: Router = Router();

/**
 * Book management routes
 */
router.get("/", getAllBooks);                  // Get all books
router.get("/:id", getBookById);               // Get a single book by ID
router.post("/", addBook);                     // Add a new book
router.put("/:id", updateBook);               // Update a book by ID
router.delete("/:id", deleteBook);            // Delete a book by ID
router.post("/:id/borrow", borrowBook);       // Borrow a book
router.post("/:id/return", returnBook);       // Return a book
router.get("/recommendations", getRecommendations);  // Get recommendations

export default router;
