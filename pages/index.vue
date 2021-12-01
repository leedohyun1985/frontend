<template>
  <main>
    <div>
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template #header>
          BootstrapVue
        </template>

        <template #lead>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </template>

        <hr class="my-4">

        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
      </b-jumbotron>

      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">
          Go somewhere
        </b-button>
      </b-card>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      lionMainTheme: [],
      fixMainTheme: []
    }
  },
  computed: {

  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      const jsonList = await this.$axios.$get('https://front.homeplus.co.kr/homeThemePeriod.json')
      console.log(jsonList)
      // console.log(jsonList.data[0])
      // console.log(jsonList.data[1])
      this.lionMainTheme = jsonList.data[0].lionMainTheme
      this.fixMainTheme = jsonList.data[1].fixMainTheme
      console.log(this.lionMainTheme)
      console.log(this.fixMainTheme)
      for (const key in this.fixMainTheme) {
        console.log(key)
      }
    }
  },
  css: [
    '@/assets/css/carousel.css'
  ]
}
</script>
