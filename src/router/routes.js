const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/CalendarioArea.vue") },
      { path: "/checklist", component: () => import("pages/CheckList.vue") },
    ],
  },
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
