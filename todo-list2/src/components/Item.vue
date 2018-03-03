<template>
    <div>
    <span
        @click="toggleTodo(todo)"
        :class="[ 'todo-item', todo.completed ? 'completed' : '' ]">
        {{ todo.content }}
    </span>
    </div>
</template>

<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true,
      }
  },
  methods: {
      toggleTodo: function (todo) {
          todo.completed = ! todo.completed
      }
  }
}
</script>

<style lang='stylus'scoped>

.todo-item { 
  position relative
  background #ffffff
  font-size 20px
  border-bottom 1px solid rgba(0,0,0,0.06)
}

.completed {
    text-decoration line-through
}
</style>
