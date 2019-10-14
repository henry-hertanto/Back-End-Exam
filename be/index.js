let app = require('express')()
let cors = require('cors')
let bodyParser = require('body-parser')
let mysql = require('mysql')
const port=process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())

let db = mysql.createConnection({
    user : 'root',
    password : 'password',
    host : 'localhost',
    database : 'moviepurwadhika'
})

app.get('/getmovies', (req, res) => {
    let sql = `select * from movies`
    let {query} = req
    if(query) {
        sql += ` where`
        if(query.name) {
            sql += ` name like '%${query.name}%' and`
        }
        if(query.tahun) {
            sql += ` tahun = ${query.tahun}and`
        }
        if(query.description) {
            sql += ` description = '${query.description}' and`
        }
    }

    db.query(sql.slice(0, -4), (err,result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    })
})

app.get('/getcategories', (req, res) => {
    let sql = `select * from categories`
    let {query} = req
    if(query) {
        sql += ` where`
        if(query.nama) {
            sql += ` name like '%${query.nama}%' and`
        }
    }

    db.query(sql.slice(0, -4), (err,result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    })
})

app.get('/getmovcat', (req, res) => {
    let sql = `select * from movcat`
    let {query} = req
    if(query) {
        sql += ` where`
        if(query.idmovie) {
            sql += ` name like '%${query.idmovie}%' and`
        }
        if(query.idcategory) {
            sql += ` tahun = ${query.idcategory}and`
        }
    }

    db.query(sql.slice(0, -4), (err,result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    })
})

module.exports={
addTodo: (req, res) => {
    db.query(`insert into movies (0, '${req.body.action}', 0)`, (err, result) => {
        if (err) throw err
        res.send('Successfully Added Action')
        console.log(result)
    })
}
}
app.listen(port, console.log('Listening . . .'))