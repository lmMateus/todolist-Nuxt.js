<template>
  <div>
    <div>
      <button @click="deleteTasks()" class=" text-xl font-medium absolute right-0 top-0 m-4 px-3 p-1 shadow-md sm:rounded-lg
      hover:bg-violet-400 hover:text-white hover:rounded-lg
      sm:text-xl text-base" >
        Limpar tarefas
        <Icon name="material-symbols:delete" class="sm:text-4xl text-base" />
      </button>
    </div>
    <div
      class="sm:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg sm:mt-20 mt-10 sm:ml-auto sm:mr-16 lg:mr-64 md:ml-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-purple-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Tarefa
            </th>
            <th scope="col" class="px-6 py-3">
              Prioridade
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task._id"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ task.task }}
            </td>
            <td v-if="task.priority == 'Baixa'" class="px-6 py-4 text-green-500">
              {{ task.priority }}
            </td>
            <td v-if="task.priority == 'Média'" class="px-6 py-4 text-yellow-500">
              {{ task.priority }}
            </td>
            <td v-if="task.priority == 'Alta'" class="px-6 py-4 text-red-500">
              {{ task.priority }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import apiService from '~/services/apiService.js';
import { ref, onMounted } from 'vue';

const tasks = ref([])
const listTask = async () => {
  try {
    const response = await apiService.finishedTasks();
    tasks.value = response.data.data.finishedTasks
  } catch (error) {
    console.error(error)
  }
}
onMounted(listTask)

const deleteTasks = async () => {
  try{
    const response = await apiService.deleteTasks();
    if (response) {
      alert('Tarefas excluídas!')
      listTask()
    }
  } catch (error) {
    console.error(error)
  }
}


</script>