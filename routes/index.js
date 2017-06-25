var express = require('express');
var router = express.Router();
var hmpCtrl = require('../controllers/hmp.server.controller');

/* GET home page. */
router.get('/', function(req, res) {
  return hmpCtrl.list(req, res);
});

/* POST filter by member name - home page. */
router.post('/', function(req, res) {
    return hmpCtrl.filterByMember(req, res);
});

/* GET New Note page. */
router.get('/newtask', function(req, res) {
    return hmpCtrl.getNote(req, res);
});

/* POST New Note page. */
router.post('/newtask', function(req, res) {
    return hmpCtrl.create(req, res);
});

module.exports = router;
