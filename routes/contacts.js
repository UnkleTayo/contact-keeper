const express = require('express');

const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access Public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route POST api/contacts
// @desc Get all users contacts
// @access Public
router.post('/', (req, res) => {
  res.send('Get all contacts');
});

// @route PUT api/contacts/:id
// @desc update contact
// @access Public
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route POST api/contacts/:id
// @desc update contact
// @access Public
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
