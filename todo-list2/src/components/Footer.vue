<template>
    <footer>Written by {{ author }}</footer>
</template>
<script>
export default {
  data () {
      return {
          author: 'Ning LIU'
      }
  }
}
</script>

<style scoped>
    footer {
        margin: 50px;
    }
</style>