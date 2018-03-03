<template>
  <div class="helper">
      <span class="left">{{ unFinishedTodoLength }} items left</span>
      <span class="tabs">
          <span
            v-for="state in states"
            :key="state"
            :class="[ state, filter === state ? 'actived' : '' ]"
            @click="toggleFilter(state)"
          >
            {{ state }}
          </span>
      </span>
      <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  data() {
      return {
          states: ['all', 'active', 'completed']
      }
  },
  props: {
      filter: {
          type: String,
          required: true,
      },
      todos: {
          type: Array,
          required: true,
      }
  },
  methods: {
      toggleFilter: function (state) {

          this.$emit('toggle', state)
      },
      clearAllCompleted: function () {
          this.$emit('del')
      }
  },
  computed: {
      unFinishedTodoLength () {
          return this.todos.filter(todo => !todo.completed).length
      }
  }
}
</script>

<style scoped>
    .helper {
        font-size: 120%;
        padding: 4px;
    }
    .left {
        float: left;
    }
    .clear {
        float: right;
    }
    .clear:hover {
        border: 1px solid rgba(175,47,47,0.4);
        border-radius: 10%;
    }
    .all:hover, .active:hover, .completed:hover {
        border: 1px solid rgba(175,47,47,0.4);
        border-radius: 6%;
        margin: 8px;
    }
    .actived {
        border: 1px solid rgba(175,47,47,0.4);
        border-radius: 10%;
    }
</style>
