let controller = {
    getUsers: (req, res) => {
        res.send({message: 'Msg from USERS api'})
    },
    getUserById: (req, res) => {
        res.send('User with id %s', req.params.userId)
    }
};
module.exports = controller;
