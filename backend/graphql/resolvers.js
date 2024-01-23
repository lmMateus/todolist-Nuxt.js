const Task = require('../models/Task.js')

const resolvers = {
  Query: {
    tasks: async () => {
      try {
        const tasks = await Task.find();
        return tasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefas.');
      }
    },
    incompleteTasks: async () => {
      try {
        const incompleteTasks = await Task.find({ status: false });
        return incompleteTasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefas incompletas.');
      }
    },
  },

  Mutation: {
    addTask: async (_, { task, priority, status }) => {
      try {
        const newTask = new Task({ task, priority, status });
        const result = await newTask.save();
        return result;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao adicionar tarefa.');
      }
    },
    updateTask: async (_, { id, task, priority, status }) => {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { task, priority, status },
          { new: true } // Para retornar o documento após a atualização
        );

        if (!updatedTask) {
          throw new Error('Tarefa não encontrada para atualização.');
        }

        return updatedTask;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar tarefa.');
      }
    },
    
    deleteTask: async (_, { id }) => {
      try {
        // Implemente a lógica de exclusão conforme necessário, por exemplo, encontrando a tarefa por um identificador único e removendo-a.
        // Aqui, estou apenas retornando um objeto vazio como exemplo.
        return {};
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir tarefa.');
      }
    },
  },
};

module.exports = resolvers;