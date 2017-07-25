'use strict'

const express = require('express');
const router = express.Router();
const controllerBook = require('../controller/booksController')

router.get('/', controllerBook.findAllBook)
router.post('/', controllerBook.insertBook)
router.delete('/:id', controllerBook.deleteBook)
router.put('/:id', controllerBook.updateBook)

module.exports = router;
