<template>
  <div>
    <div
      class="sm:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg sm:mt-20 sm:ml-auto sm:mr-16 lg:mr-64 md:ml-auto">

      <form class="py-4 px-6">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tarefa
            </label>
            <input v-model="task" type="text" id="task"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Estudar/ Limpar Quarto">
          </div>
          <div>
            <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Prioridade
            </label>
            <select id="" v-model='priority'
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected disabled hidden value="escolha">Escolha a prioridade</option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>
        </div>
      </form>
      <button @click="create(task, priority)"
        class=" mb-4 ms-4 sm:mr-auto text-white font-bold bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Criar</button>
    </div>
  </div>
</template>

<script setup>
import check from '~/utils/checkField.js';
import apiService from '~/services/apiService.js';
import { useRouter } from 'vue-router';

const task = ref()
const priority = ref('escolha')


const create = async (t, p) => {
  if (check(t, p)) {
    try {
      const response = await apiService.createTask({
        task: t,
        priority: p,
        status: false
      });
      if (response) {
        alert('Tarefa criada com sucesso!')
        await navigateTo('/')
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

} 
</script>