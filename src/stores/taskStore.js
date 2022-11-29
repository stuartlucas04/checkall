import { defineStore } from "pinia";
import moment from "moment";

export const taskStore = defineStore("task", {
  state: () => ({
    id: "",
    name: "",
    description: "",
    isCompleted: false,
    date: moment().format("YYYY/MM/DD"),
    time: moment().format("HH:MM"),
  }),
  actions: {
    hasValidInputs() {
      if (this.$state.name.trim().length === 0) {
        alert("Insira um nome para a sua tarefa!");

        return false;
      }

      if (this.$state.description.trim().length === 0) {
        alert("Insira uma descrição para a sua tarefa!");

        return false;
      }

      return true;
    },
  },
});
