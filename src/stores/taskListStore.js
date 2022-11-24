import { defineStore } from "pinia";
import { taskStore } from "./taskStore";
import { uid } from "quasar";

const task = taskStore();

export const taskListStore = defineStore("taskList", {
  state: () => JSON.parse(localStorage.getItem("task_list") || "[]"),
  actions: {
    add() {
      const newTask = {
        ...task.$state,
        id: uid(),
      };

      console.log(this.$state);

      this.$state.push(newTask);

      const storageTaskList = JSON.parse(
        localStorage.getItem("task_list") || "[]"
      );

      localStorage.setItem(
        "task_list",
        JSON.stringify([...storageTaskList, newTask])
      );

      location.href = "/#/checklist";
    },
  },
});
