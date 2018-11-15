const express = require('express');
const router  = express.Router();
const Notes = require("../models/Notes");
const Notes = require('../controllers/noteController');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/notes')
    .get(notes.list_all_notes)
    .post(notes.create_a_note);

router.get('/notes/:noteId')
    .get(notes.read_a_note)
    .delete(notes.delete_a_note);

router.get('/favorited')
    .get(notes.list_favorites);

router.put('/favorited/:noteId')
    .put(notes.favorite_a_note);

router.get('/user/:user')
    .get(notes.list_user_notes)

module.exports = router;
