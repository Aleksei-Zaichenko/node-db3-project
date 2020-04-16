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
    .where('scheme id', '=', passedId);
}

function add(passedData){
    return db('schemes')
    .insert(passedData)
    .then(([newSchemeId]) => {
        return findById(newSchemeId);
    });
}

function addStep(passedData, passedId){
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