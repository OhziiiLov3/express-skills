const Skill = require('../models/skill');

const index = (req,res) =>{
    res.render('skills/index',{
        skills: Skill.getAll()
    })
}


const newSkill = (req,res)=>{
    res.render('skills/new',{
        title: 'New Skill'
    })
}


const show = (req,res) =>{
    res.render('skills/show',{
        skill: Skill.getOne(req.params.id)
    })
}

const create = (req,res)=>{
    Skill.create(req.body)
    console.log(req.body);
    res.redirect('/skills')
}

const edit = (req,res) =>{
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit',{
        title: 'Edit skill',
        skill: skill
    })
}

const update = (req,res)=>{
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}


const deleteSkill = (req,res)=>{
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}