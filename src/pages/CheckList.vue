<template>
  <HeaderArea />
  <main>
    <ul class="task-list flex column" v-if="taskList.$state.length !== 0">
      <TaskBox
        v-for="task in filterTaskList.filter()"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :description="task.description"
        :isCompleted="task.isCompleted"
        :date="task.date"
        :time="task.time"
      />
    </ul>
    <div class="box flex column items-center justify-center" v-else>
      <p class="text">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" alt="" class="image" />
    </div>
  </main>
  <FooterArea />
</template>

<style scoped>
.task-list {
  padding: 0;
  margin: 0;
  gap: 12px;
  padding: 80px 20px 80px;
}

.box {
  min-height: 100vh;
  padding: 80px 0 80px;
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

<script setup>
import { taskListStore } from "src/stores/taskListStore";
import HeaderArea from "components/HeaderArea.vue";
import FooterArea from "components/FooterArea.vue";
import TaskBox from "components/TaskBox.vue";
import { filterTaskListStore } from "stores/filterTaskListStore";

const filterTaskList = filterTaskListStore();
const taskList = taskListStore();
</script>
