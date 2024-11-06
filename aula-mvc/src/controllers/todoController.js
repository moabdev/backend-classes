const Todo = require('../models/todoModels');

// Criar nova tarefa
exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.redirect('/'); 
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Obter todas as tarefas
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos }); 
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Obter tarefa por ID
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).send({ message: 'Tarefa não encontrada' });
        res.render('edit', { todo }); 
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Atualizar tarefa
exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) return res.status(404).send({ message: 'Tarefa não encontrada' });
        res.redirect('/'); 
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Deletar tarefa
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).send({ message: 'Tarefa não encontrada' });
        res.redirect('/');
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
