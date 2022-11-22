<template>
  <li>
    <div>{{task.name}}</div>
    <small>{{task.dueDate}} @ {{task.dueTime}}</small>
    <button>X</button>
  </li>
</template>

<script>
export default {
  name: 'TaskComponent',
  props: {
    task: {
      type: Object,
      require: true
    }
  },
  data () {
    return {}
  }
}
</script>
