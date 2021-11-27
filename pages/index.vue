<template>
  <div>
    <p>{{ MODE }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      MODE: ''
    }
  },
  mounted () {
    this.MODE = process.env.MODE
  },
  methods: {
  },
  css: [
    '@/assets/css/main.css'
  ]
}
</script>
