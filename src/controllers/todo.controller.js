const db = require('../config/db');
const controller = {};

controller.list = (req, res) => {
    db.query("SELECT * FROM todos;", (err, result) => {
        if (err) res.json(err);
        res.render('todos', {
            data: result
        });
    });
};

controller.store = (req, res) => {
    const data = req.body;
    if (data.todo) {
        db.query("INSERT INTO todos set ?", [data], (err, todos) => {
        });
    }
    res.redirect("/");
}

controller.delete = (req, res) => {
    const { id } = req.params;
    if (id) {
        db.query("DELETE from todos where id = ?", [id], (err, todos) => {
        });
    }
    res.redirect("/");
}

controller.edit = (req, res) => {
    const { id } = req.params;
    if (!id) res.redirect("/");
    db.query("SELECT * FROM todos where id = ?", [id], (err, todos) => {
        if (err || todos.length === 0) res.redirect("/");
        res.render('edit', {
            data: todos[0]
        });
    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (id && data.todo) {
        db.query("UPDATE todos set ? where id = ?", [data, id], (err, result) => {
        });
    }
    res.redirect('/');
}

module.exports = controller;