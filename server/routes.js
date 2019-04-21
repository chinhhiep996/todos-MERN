const router = require('express').Router()

const { 
    createTodo, 
    getAllTodos, 
    deleteTodo,
    completion
} = require('./controllers')

router.get('/', getAllTodos)
router.post('/', createTodo)
router.delete('/:todoId', deleteTodo)
router.put('/:todoId', completion)

module.exports = router