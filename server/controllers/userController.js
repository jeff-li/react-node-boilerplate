const db  = require('../db/knex');
const logger = require('../logger')

let controller = {
    getUsers: (req, res) => {
        db.select('id', 'name', 'email').from('users').then(function(users){
            res.send(users)
        });
        // res.send({message: 'Msg from USERS api'})
    },
    getUserById: (req, res) => {
        res.send('User with id %s', req.params.userId)
    }
};
module.exports = controller;
