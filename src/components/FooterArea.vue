<template>
  <footer class="bg-primary flex flex-center justify-around">
    <a href="/#/calendar">
      <q-btn icon="calendar_month" flat round />
    </a>
    <a href="/#/checklist/new-task">
      <q-btn icon="add" flat round />
    </a>
    <a href="/#/checklist">
      <q-btn icon="checklist" flat round />
    </a>
  </footer>
</template>

<style scoped>
footer {
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

a {
  text-decoration: none;
  color: black;
}
</style>
