<template>
  <div>
    <div>
      <button @click="openCreateTask()" class="absolute right-0 top-0 m-4 sm:text-5xl text-4xl">
        <Icon name="ph:plus-circle-light" />
      </button>
    </div>
    <div v-if="!editingTaskOpen && !createTaskOpen"
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
            <th scope="col" class="px-6 py-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Cuidar dos peixes
            </th>
            <td class="px-6 py-4 text-green-500">
              Baixa
            </td>
            <td class="px-6 py-4">

              <button @click="openEditTask(task)" class="font-medium hover:underline mr-3">
                <Icon name="ic:outline-mode-edit-outline" class="text-2xl" />
              </button>
              <button @click="finishTask(task)" class="font-medium hover:underline mr-3">
                <Icon name="material-symbols:check-small" class="text-3xl" />
              </button>
              <button @click="deleteTask(task)" class="font-medium hover:underline">
                <Icon name="material-symbols:delete" class="text-2xl" />
              </button>

            </td>
          </tr>          
        </tbody>
      </table>
    </div>
    <div v-if="editingTaskOpen">
      <EditTaskForm :task="task" @close="editingTaskOpen = null"/>
    </div>
    <div v-if="createTaskOpen">
      <CreateTaskForm @close="createTaskOpen = null"/>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      createTaskOpen: null,
      editingTaskOpen: null,
      task:null,
    };
  },
  methods: {
    openEditTask() {      
      this.editingTaskOpen = true;
      this.task = {teste: "ok"}
    },
    openCreateTask(){
      this.createTaskOpen =true;
    },
    finishTask() {
      alert("Tarefa Finalizada")
    },
  }
};
</script>