<template>
  <q-page>
    <div class="text-center">
      <q-tabs inline-label>
        <q-route-tab
          to="/checklist"
          name="settings"
          icon="checklist"
          label="Checklist"
          exact
        />
        <q-route-tab
        to="/AtividadesConcluidas"
        name="AtividadesConcluidas"
        icon="task_alt"
        label="Atividades Concluidas"
        exact
        />
      </q-tabs>
    </div>
    <div
    class="fixed-center paddingmsg"
    bg-warning v-if="showAdvise">
      <p class="text text-center">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" class="palmeira" />
    </div>
    <button @click="toggleAdvise()">Apagar</button>
  </q-page>
</template>

<style>
.text {
  color: #959595;
  font-size: 25px;
  font-weight: 600;
}

.palmeira {
  width: 300px;
  height: 220px;
}
.paddingmsg {
  padding: 200px;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SeuChecklist",
   data() {
     return {
      showAdvise: true
   }
  },
   methods: {
     toggleAdvise() {
       this.showAdvise = !this.showAdvise
     }
   },
});
</script>
