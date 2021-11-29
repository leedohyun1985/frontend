<template>
  <main>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        />
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        />
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        />
      </b-carousel>
      <b-jumbotron>
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

        <b-button variant="primary" href="#">
          Do Something
        </b-button>
        <b-button variant="success" href="#">
          Do Something Else
        </b-button>
      </b-jumbotron>
    </div>
    <b-button v-b-toggle.collapse-1 variant="primary">
      Toggle Collapse
    </b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <p class="card-text">
          Collapse contents Here
        </p>
        <b-button v-b-toggle.collapse-1-inner size="sm">
          Toggle Inner Collapse
        </b-button>
        <b-collapse id="collapse-1-inner" class="mt-2">
          <b-card>Hello!</b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </main>
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
    '@/assets/css/carousel.css'
  ]
}
</script>
