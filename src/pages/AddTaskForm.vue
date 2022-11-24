<template>
  <div class="container">
    <q-input v-model="task.name" label="Nome da sua tarefa" />
    <div class="container-time-date">
      <q-input filled v-model="task.date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="task.date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input filled v-model="task.time" mask="time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-time v-model="task.time">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-input
      v-model="task.description"
      filled
      type="textarea"
      placeholder="Descrição da sua tarefa"
    />
    <div class="container-buttons">
      <a href="/#/checklist" class="link">
        <q-btn color="red-13" icon-right="close">Cancelar</q-btn>
      </a>
      <q-btn color="green-13" icon-right="done" @click="taskList.add()"
        >Confirmar</q-btn
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 16px;
  justify-content: center;
  height: 95vh;
}

.container-time-date {
  display: flex;
  gap: 16px;
}

.container-buttons {
  display: flex;
  justify-content: space-between;
}

.link {
  text-decoration: none;
}
</style>

<script>
import { taskListStore } from "src/stores/taskListStore";
import { taskStore } from "src/stores/taskStore";
import { defineComponent } from "vue";

const task = taskStore();
const taskList = taskListStore();

export default defineComponent({
  name: "AddTaskForm",
  setup() {
    return {
      task,
      taskList,
    };
  },
});
</script>
