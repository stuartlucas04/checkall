<template>
  <q-page class="main">
    <div class="box">
      <p class="text">
        Hoje está calmo, bora fazer algo produtivo para animar o dia?
      </p>
      <img src="../../public/arvore.png" alt="" class="image" />
    </div>
    <a href="/#/checklist/new-task" class="link">
      <q-btn class="button" icon-right="add"> Crie uma nova tarefa aqui </q-btn>
    </a>
  </q-page>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.box {
  text-align: center;
}

.text {
  color: black;
  opacity: 0.4;
  font-weight: 800;
  text-align: center;
  font-size: 20px;
}

.image {
  width: 250px;
}

.button {
  background-color: #a1ff99;
}

.link {
  text-decoration: none;
  color: black;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckList",
});
</script>
