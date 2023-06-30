const Skill = require('../models/skill');

const index = (req,res) =>{
    res.render('skills/index',{
        skills: Skill.getAll()
    })
}


const newSkill = (req,res)=>{
    res.render('skills/new',{
        title: 'New Todo'
    })
}


const show = (req,res) =>{
    res.render('skills/show',{
        skill: Skill.getOne(req.params.id)
    })
}




module.exports = {
    index,
    show,
    new: newSkill,
}