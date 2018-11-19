const db  = require('../db/knex');
const logger = require('../logger')

let controller = {

    getUsers: (req, res) => {
        db.select('id', 'name', 'email').from('users').then(function(users){
            res.send(users)
        });
    },

    getAllUserInfoById: (req, res) => {

        db.select()
            .from('users')
            .where('users.id', req.params.userId)
            .first()
            .then(user => {
                res.send(user)
            })

    }
};

module.exports = controller;
