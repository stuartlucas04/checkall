const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/CalendarioArea.vue") },
    ],
  },
  {
    path: "/checklist",
    component: () => import("layouts/SecondLayout.vue"),
    children: [{ path: "", component: () => import("pages/checklist.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
