var express = require('express');
var router = express.Router();


const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
// GET- ALL Skills /skills
router.get('/', skillsCtrl.index);
// GET - NEW -> route to new view /skills/new
router.get('/new',skillsCtrl.new);
// GET-Show Skill detials(single data source) /skills/:id
router.get('/:id', skillsCtrl.show);
// GET - EDIT -> /skills/:id/edit
router.get('/:id/edit',skillsCtrl.edit);


// POST - /skills
router.post('/', skillsCtrl.create);
// DELETE - /:id
router.delete('/:id',skillsCtrl.delete);
// PUT -> /skills/:id
// router.put()


module.exports = router;
