import axios from 'axios';

const apiUrl = 'http://localhost:4000/graphql'

export default {  
  createTask(data){   
    const { task, priority, status } = data;
    return axios.post(
      apiUrl,
      {
      query: `
        mutation AddTask($task: String!, $priority: String!, $status: Boolean!) {
          addTask(task: $task, priority: $priority, status: $status) {
            _id
            task
            priority
            status
          }
        }
      `,
      variables: {
        task,
        priority,
        status,
      },
    });
  },

  listTasks(){
    return axios.post(apiUrl, {
      query: `
        query {
          incompleteTasks {
            _id
            task
            priority
            status
          }
        }
      `,
    });
  },
};
