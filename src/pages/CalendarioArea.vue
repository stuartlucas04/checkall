<template>
  <q-page class="flex flex-center">
    <HeaderArea />
    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" />
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { HeaderArea } from "../components/HeaderArea.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "CalendarioArea",
  setup() {
    return {
      date: ref('2019/02/01')
    }
  }
});
</script>
