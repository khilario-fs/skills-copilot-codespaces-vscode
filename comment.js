// Create web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// 2. Create an app
const app = express();

// 3. Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4. Create a router
const router = express.Router();

// 5. Create a route
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// 6. Register the router
app.use('/', router);

// 7. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 8. Create a route for GET /comments
router.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 9. Create a route for GET /comments/:id
router.get('/comments/:id', (req, res) => {
  res.send(`GET /comments/${req.params.id}`);
});

// 10. Create a route for POST /comments
router.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// 11. Create a route for PUT /comments/:id
router.put('/comments/:id', (req, res) => {
  res.send(`PUT /comments/${req.params.id}`);
});

// 12. Create a route for DELETE /comments/:id
router.delete('/comments/:id', (req, res) => {
  res.send(`DELETE /comments/${req.params.id}`);
});

// 13. Create a route for GET /comments/:id/abuse-reports
router.get('/comments/:id/abuse-reports', (req, res) => {
  res.send(`GET /comments/${req.params.id}/abuse-reports`);
});

// 14. Create a route for POST /comments/:id/abuse-reports
router.post('/comments/:id/abuse-reports', (req, res) => {
  res.send(`POST /comments/${req.params.id}/abuse-reports`);
});

// 15. Create a route for DELETE /comments/:id/abuse-reports/:reportId
router.delete('/comments/:id/abuse-reports/:reportId', (req, res) => {
  res.send(`DELETE /comments/${req.params.id}/abuse-reports/${req.params.reportId}`);
});