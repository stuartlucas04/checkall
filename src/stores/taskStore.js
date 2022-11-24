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
});
