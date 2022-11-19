<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <q-tabs inline-label>
        <q-route-tab
          to="/"
          name="todo"
          icon="event"
          label="Checklist diária"
          exact />
        <q-route-tab
          to="/checklist"
          name="settings"
          icon="checklist"
          label="Atividades concluídas"
          exact />
      </q-tabs>
      <p class="text">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" class="palmeira" />
    </div>
  </q-page>
</template>

<style>
.text {
  color: #959595;
  font-size: 20px;
  font-weight: 600;
}

.palmeira {
  width: 200px;
  height: 150px;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
