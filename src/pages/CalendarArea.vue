<template>
  <HeaderArea />
  <main>
    <q-date v-model="date" />
  </main>
  <FooterArea />
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<script setup>
import { ref } from "vue";
import HeaderArea from "components/HeaderArea.vue";
import FooterArea from "components/FooterArea.vue";

const date = ref("2019/02/02");
</script>
