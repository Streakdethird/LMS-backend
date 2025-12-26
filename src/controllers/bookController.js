import db from "../models/index.js";

export const createBook = async (req, res) => {
  try {
    const book = await db.Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBooks = async (_req, res) => {
  try {
    const books = await db.Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};