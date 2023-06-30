var express = require('express');
var router = express.Router();


const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
// GET- ALL Skills
router.get('/', skillsCtrl.index);
// GET - NEW -> route to new view 
router.get('/new',skillsCtrl.new);
// GET-Show Skill detials(single data source)
router.get('/:id', skillsCtrl.show);



module.exports = router;
