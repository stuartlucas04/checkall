<template>
  <header>
    <q-tabs v-model="header" inline-label class="bg-primary">
      <q-tab
        name="all"
        icon="list"
        exact
        @click="filterTaskList.setFilter('all')"
      />
      <q-tab
        name="pending"
        icon="pending"
        exact
        @click="filterTaskList.setFilter('pending')"
      />
      <q-tab
        name="completed"
        icon="check"
        exact
        @click="filterTaskList.setFilter('completed')"
      />
    </q-tabs>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  left: 0;
}
</style>

<script setup>
import { ref } from "vue";
import { filterTaskListStore } from "stores/filterTaskListStore";

const header = ref("header");
const filterTaskList = filterTaskListStore();
</script>
