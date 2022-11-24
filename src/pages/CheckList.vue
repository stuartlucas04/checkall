<template>
  <q-page class="main">
    <ul v-if="taskList.$state.length !== 0">
      <li v-for="task in taskList.$state" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
    <div class="box" v-else>
      <p class="text">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" alt="" class="image" />
    </div>
    <a href="/#/checklist/new-task" class="link">
      <q-btn class="button" icon-right="add"> Crie uma nova tarefa aqui </q-btn>
    </a>
  </q-page>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.box {
  text-align: center;
}

.text {
  color: black;
  opacity: 0.4;
  font-weight: 800;
  text-align: center;
  font-size: 20px;
}

.image {
  width: 250px;
}

.button {
  background-color: #a1ff99;
}

.link {
  text-decoration: none;
  color: black;
  position: fixed;
  bottom: 60px;
}
</style>

<script>
import { taskListStore } from "src/stores/taskListStore";
import { defineComponent } from "vue";

const taskList = taskListStore();

export default defineComponent({
  name: "CheckList",
  setup() {
    return {
      taskList,
    };
  },
});
</script>
