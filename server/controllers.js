const Todo = require('./models');

exports.createTodo = async (req, res, next) => {
    const { text } = req.body

    try {
        const newTodo = new Todo({
            text
        })

        await newTodo.save()
        return res.json(newTodo)
    } catch(err) {
        console.log(err)
    }
}

exports.getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find()
        return res.json(todos)
    } catch(err) {
        console.log(err)
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        await Todo.findByIdAndRemove(req.params.todoId)
        return res.json({
            todoId_delete: req.params.todoId
        })
    } catch(err) {
        console.log(err)
    }
}

exports.completion = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        todo.isCompleted = !todo.isCompleted
        await todo.save()
        return res.json({
            todo_edited: todo
        })
    } catch(err) {
        console.log(err)
    }
}