<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-black">
      <q-toolbar>
        <q-toolbar-title class="absolute-center text-weight-bold">
          Atividades Concluidas
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-black">
      <q-tabs inline-label>
        <q-route-tab to="/" name="todo" icon="event" label="Calendário" exact />
        <q-route-tab
          to="/checklist"
          name="settings"
          icon="checklist"
          label="Checklist"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script></script>
