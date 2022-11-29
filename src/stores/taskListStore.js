import { defineStore } from "pinia";
import { taskStore } from "./taskStore";
import { uid } from "quasar";

const task = taskStore();

export const taskListStore = defineStore("taskList", {
  state: () => JSON.parse(localStorage.getItem("task_list") || "[]"),
  actions: {
    add() {
      if (task.hasValidInputs()) {
        const newTask = {
          ...task.$state,
          id: uid(),
        };

        this.$state.push(newTask);

        const storageTaskList = JSON.parse(
          localStorage.getItem("task_list") || "[]"
        );

        localStorage.setItem(
          "task_list",
          JSON.stringify([...storageTaskList, newTask])
        );

        location.href = "/#/checklist";

        task.$reset();
      }
    },
    complete(id) {
      const updatedTaskList = this.$state.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }

        return task;
      });

      localStorage.setItem("task_list", JSON.stringify(updatedTaskList));
    },
    delete(id) {
      this.$state.filter((task) => {
        if (task.id === id) {
          const index = this.$state.indexOf(task);

          this.$state.splice(index, 1);
        }
      });

      localStorage.setItem("task_list", JSON.stringify(this.$state));
    },
  },
});
