<template>
  <div>
    <div
      class="sm:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg sm:mt-20 sm:ml-auto sm:mr-16 lg:mr-64 md:ml-auto">
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
              <a href="#" class="font-medium hover:underline mr-3">
                <Icon name="material-symbols:delete" class="text-2xl" />
              </a>
              <a href="#" class="font-medium hover:underline">
                <Icon name="material-symbols:check-small" class="text-2xl" />
              </a>
            </td>
          </tr>
          <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Lavar Roupa
            </th>
            <td class="px-6 py-4 text-red-500">
              Alta
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium hover:underline mr-3">
                <Icon name="material-symbols:delete" class="text-2xl" />
              </a>
              <a href="#" class="font-medium hover:underline">
                <Icon name="material-symbols:check-small" class="text-2xl" />
              </a>
            </td>
          </tr>
          <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Estudar
            </th>
            <td class="px-6 py-4 text-yellow-400">
              Média
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium hover:underline mr-3">
                <Icon name="material-symbols:delete" class="text-2xl" />
              </a>
              <a href="#" class="font-medium hover:underline">
                <Icon name="material-symbols:check-small" class="text-2xl" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>