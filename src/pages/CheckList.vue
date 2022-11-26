<template>
  <q-page padding>
    <q-list bordered separetor v-if="taskList.$state.length !== 0">
      <q-item
        class="task"
        v-for="task in taskList.$state"
        :key="task.id"
        :class="task.completed ? 'bg-primary' : 'bg-accent'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" v-ripple />
        </q-item-section>
        <q-item-section>{{ task.name }}</q-item-section>
        <q-item-section side>
          <q-item-label caption class="text-black">{{
            task.dueDate
          }}</q-item-label>
          <q-item-label caption class="text-black">{{
            task.dueTime
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="box" v-else>
      <p class="text">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" alt="" class="image" />
    </div>
    <a href="/#/checklist/new-task" class="link">
      <div class="test">
        <q-btn class="button teste1" icon-right="add" fixed-center>
          Crie uma nova tarefa aqui
        </q-btn>
      </div>
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

.teste1 {
  position: absolute;
  bottom: 20px;
}
.test {
  display: flex;
  justify-content: center;
}
.column-reverse {
  flex-direction: column-reverse;
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
  padding-left: -30px;
}

.link {
  text-decoration: none;
  color: black;
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
