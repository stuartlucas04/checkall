<template>
  <q-page padding>
    <div> To Do List</div>
    <ul>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task">
      </Task>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtividadesConcluidas',
  components: { Task },
  data() {
    return {
      tasks: [
        {
          name: 'Go shop',
          dueDate: '12/09/2022',
          dueTime: '14:00'
        },
        {
          name: 'Get bananas',
          dueDate: '12/09/2022',
          dueTime: '14:30'
        },
        {
          name: 'Get apples',
          dueDate: '12/09/2022',
          dueTime: '15:00'
        }
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
})
</script>
<style>
.border-grey {
  border: 1px solid grey;
}
</style>
