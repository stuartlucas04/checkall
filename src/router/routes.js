const routes = [
  { path: "/calendar", component: () => import("src/pages/CalendarArea.vue") },
  { path: "/checklist", component: () => import("pages/CheckList.vue") },
  {
    path: "/checklist/new-task",
    component: () => import("pages/AddTaskForm.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
