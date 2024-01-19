<template>
  <div>
    <div
      class="sm:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg sm:mt-20 sm:ml-auto sm:mr-16 lg:mr-64 md:ml-auto">
      <div>
        <button  @click="close"
         class="absolute right-0 top-0 m-4 text-2xl">
          <Icon name="material-symbols:close-small-outline" />
        </button>
      </div>
      <form class="py-4 px-6 mt-">        
        <div class="grid gap-6 mb-6 md:grid-cols-2 mt-7">
          <div>
            <label for="tarefa" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tarefa
            </label>
            <input type="text" id="tarefa"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required>
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Prioridade
            </label>
            
            
            
            <h2>{{ task.teste }}</h2>

            <select id="underline_select"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>
        </div>
        <button type="submit"
          class=" sm:mr-auto text-white font-bold bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Salvar</button>
      </form>


    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    close(){
      this.$emit('close')
    },
  }
};
</script>