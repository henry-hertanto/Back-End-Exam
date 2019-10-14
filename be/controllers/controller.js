const db = require('../index.js')

module.exports = {

    addTodo: (req, res) => {
        db.query(`insert into movies values (0, '${req.body.action}', 0)`, (err, result) => {
            if (err) throw err
            res.send('Successfully Added Action')
            console.log(result)
        })
    },

    editTodo: (req, res) => {
        db.query(`update movies set action = '${req.body.action}' where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Update Success!')
        })
    },

    deleteTodo: (req, res) => {
        var id = req.params.terserah
        db.query(`delete from movies where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
}