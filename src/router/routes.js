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
    children: [{ path: "", component: () => import("src/pages/SeuChecklist.vue") }],
  },
  {
    path: "/AtividadesConcluidas",
    component: () => import("layouts/AtividadesConcluidasLayout.vue"),
    children: [{ path: "", component: () => import("pages/AtividadesConcluidas.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
