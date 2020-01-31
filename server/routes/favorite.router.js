const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
    SELECT "category".name, "favorites".url FROM "favorites"
    JOIN "category" ON "favorites".category_id = "category".id;                    
  `
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('in post route')
  console.log(req.body.url)
  const queryText = `
    INSERT INTO "favorites" ("url", "category_id")
    VALUES (${req.body.url}, 1)
    `
  pool.query(queryText)
    .then((result) => {
      console.log('post query success!')
    }).catch((err) => {
      console.log('ope!', err)
    })
});
// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
