const db = require('../data/db-config.js');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find(){
    return db('schemes');
}

function findById(passedId){
    return db('schemes').where({id: passedId}).first();
}

function findSteps(passedId){
    return db('steps')
    .where('steps.scheme_id', passedId)
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('steps.id','schemes.scheme_name','steps.step_number', 'steps.instructions');
}

function add(passedData){
    return db('schemes')
    .insert(passedData)
    .then(([newSchemeId]) => {'schemes', 'id', '=', passed
        return findById(newSchemeId);
    });
}

function addStep(passedData, passedId){
    return db('steps')
    .insert(passedData)
    .then(() => {
        return findSteps(passedId);
    })
}

function update(passedChanges, passedId){
    return db('schemes')
    .where({id: passedId})
    .update(passedChanges)
    .then(() => {
        return findById(passedId);
    })
}

function remove(passedId){
    return db('schemes').where({id: passedId}).del();
}