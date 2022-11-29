<template>
  <li class="task bg-accent column">
    <div class="top-container">
      <div class="name-container">
        <q-checkbox
          v-ripple
          v-model="isCompleted"
          @click="taskList.complete(props.id)"
        />
        <span class="task-name">{{ props.name }}</span>
      </div>
      <q-btn icon="delete" flat round @click="taskList.delete(props.id)" />
    </div>
    <div class="bottom-container">
      <p>{{ props.description }}</p>
      <div class="date-container">
        <span>{{ props.date }}</span>
        <span>{{ props.time }}</span>
      </div>
    </div>
  </li>
</template>

<style scoped>
.task {
  border-radius: 10px;
  padding: 8px 16px;
  list-style: none;
  display: flex;
  gap: 10px;
}

.top-container {
  display: flex;
  justify-content: space-between;
}

.name-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.task-name {
  word-break: break-word;
}

.bottom-container {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0;
  word-break: break-word;
}

.date-container {
  display: flex;
  flex-direction: column;
  text-align: end;
}
</style>

<script setup>
import { ref } from "vue";
import { taskListStore } from "stores/taskListStore";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const isCompleted = ref(props.isCompleted);

const taskList = taskListStore();
</script>
