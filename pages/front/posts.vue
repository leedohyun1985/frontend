
<template>
  <div>
    <p>body</p>
    <p>{{ MODE }}</p>
  </div>
</template>

<script>
export default {
  layout (context) {
    return 'blog'
  },
  mounted () {
    this.MODE = process.env.MODE
  }
}
</script>
