import { defineStore } from "pinia";
import { taskListStore } from "./taskListStore";

const taskList = taskListStore();

export const filterTaskListStore = defineStore("filterTaskList", {
  state: () => ({
    filterType: "all",
  }),
  actions: {
    setFilter(type) {
      this.$state.filterType = type;
    },
    filter() {
      switch (this.$state.filterType) {
        case "pending":
          return taskList.$state.filter((task) => !task.isCompleted);

        case "completed":
          return taskList.$state.filter((task) => task.isCompleted);

        case "all":
          return taskList.$state;

        default:
          return taskList.$state;
      }
    },
  },
});
