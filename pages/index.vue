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
    <b-alert show>
      Default Alert
    </b-alert>

    <b-alert variant="success" show>
      Success Alert
    </b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      />
    </b-alert>

    <b-button variant="info" class="m-1" @click="showAlert">
      Show alert with count-down timer
    </b-button>
    <b-button variant="info" class="m-1" @click="showDismissibleAlert=true">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
    <b-alert show variant="primary">
      Primary Alert
    </b-alert>
    <b-alert show variant="secondary">
      Secondary Alert
    </b-alert>
    <b-alert show variant="success">
      Success Alert
    </b-alert>
    <b-alert show variant="danger">
      Danger Alert
    </b-alert>
    <b-alert show variant="warning">
      Warning Alert
    </b-alert>
    <b-alert show variant="info">
      Info Alert
    </b-alert>
    <b-alert show variant="light">
      Light Alert
    </b-alert>
    <b-alert show variant="dark">
      Dark Alert
    </b-alert>
    <b-alert show variant="success">
      <h4 class="alert-heading">
        Well done!
      </h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </b-alert>
    <b-avatar src="https://placekitten.com/300/300" />
    <b-avatar icon="people-fill" />
    <b-avatar text="BV" size="4rem" />
    <b-avatar size="4em">
      Hello<br>World
    </b-avatar>
    <b-avatar size="4em">
      你好<br>世界
    </b-avatar>
    <b-avatar variant="danger" />
    <b-avatar square />
    <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300" />
    <b-avatar badge badge-variant="dark" text="BV" />
    <b-avatar badge="BV" />
    <b-avatar badge="7" variant="primary" badge-variant="dark" />
    <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
      <template #badge>
        <b-icon icon="star-fill" />
      </template>
    </b-avatar>
    <b-avatar badge />
    <b-avatar badge badge-left />
    <b-avatar badge badge-top />
    <b-avatar badge badge-left badge-top />
    <b-avatar badge />
    <b-avatar badge badge-offset="-0.5em" />
    <b-avatar badge badge-offset="-2px" />
    <b-avatar badge badge-offset="2px" />
    <b-avatar badge badge-top />
    <b-avatar badge badge-top badge-offset="-0.5em" />
    <b-avatar badge badge-top badge-offset="-2px" />
    <b-avatar badge badge-top badge-offset="2px" />
    <b-avatar-group size="60px">
      <b-avatar />
      <b-avatar text="BV" variant="primary" />
      <b-avatar src="https://placekitten.com/300/300" variant="info" />
      <b-avatar text="OK" variant="danger" />
      <b-avatar variant="warning" />
      <b-avatar src="https://placekitten.com/320/320" variant="dark" />
      <b-avatar icon="music-note" variant="success" />
    </b-avatar-group>
    <h2>Example heading <b-badge>New</b-badge></h2>
    <h3>Example heading <b-badge>New</b-badge></h3>
    <h4>Example heading <b-badge>New</b-badge></h4>
    <h5>Example heading <b-badge>New</b-badge></h5>
    <h6>Example heading <b-badge>New</b-badge></h6>
    <b-button variant="primary">
      Notifications <b-badge variant="light">
        4
      </b-badge>
    </b-button>
    <b-button variant="primary">
      Profile
      <b-badge variant="light">
        9 <span class="sr-only">unread messages</span>
      </b-badge>
    </b-button>
    <b-badge variant="primary">
      Primary
    </b-badge>
    <b-badge variant="secondary">
      Secondary
    </b-badge>
    <b-badge variant="success">
      Success
    </b-badge>
    <b-badge variant="danger">
      Danger
    </b-badge>
    <b-badge variant="warning">
      Warning
    </b-badge>
    <b-badge variant="info">
      Info
    </b-badge>
    <b-badge variant="light">
      Light
    </b-badge>
    <b-badge variant="dark">
      Dark
    </b-badge>
    <b-badge pill variant="primary">
      Primary
    </b-badge>
    <b-badge pill variant="secondary">
      Secondary
    </b-badge>
    <b-badge pill variant="success">
      Success
    </b-badge>
    <b-badge pill variant="danger">
      Danger
    </b-badge>
    <b-badge pill variant="warning">
      Warning
    </b-badge>
    <b-badge pill variant="info">
      Info
    </b-badge>
    <b-badge pill variant="light">
      Light
    </b-badge>
    <b-badge pill variant="dark">
      Dark
    </b-badge>
    <b-badge href="#" variant="primary">
      Primary
    </b-badge>
    <b-badge href="#" variant="secondary">
      Secondary
    </b-badge>
    <b-badge href="#" variant="success">
      Success
    </b-badge>
    <b-badge href="#" variant="danger">
      Danger
    </b-badge>
    <b-badge href="#" variant="warning">
      Warning
    </b-badge>
    <b-badge href="#" variant="info">
      Info
    </b-badge>
    <b-badge href="#" variant="light">
      Light
    </b-badge>
    <b-badge href="#" variant="dark">
      Dark
    </b-badge>
    <b-breadcrumb :items="breadcrumbItems" />
    <b-row>
      <b-col md="auto">
        <b-calendar v-model="calendarValue" locale="ko-KR" @context="onContext" />
      </b-col>
      <b-col>
        <p>Value: <b>'{{ calendarValue }}'</b></p>
        <p class="mb-0">
          Context:
        </p>
        <pre class="small">{{ calendarContext }}</pre>
      </b-col>
    </b-row>
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
    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>
        Active action
      </b-dropdown-item>
      <b-dropdown-item disabled>
        Disabled action
      </b-dropdown-item>
    </b-dropdown>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowfullscreen
    />

    <b-form @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <b-form-input id="feedback-user" v-model="userId" :state="validation" />
      <b-form-invalid-feedback :state="validation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
    </b-form>
    <div>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        I accept the terms and use
      </b-form-checkbox>

      <div>State: <strong>{{ status }}</strong></div>
    </div>
    <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="datepickerValue" class="mb-2" />
      <p>Value: '{{ datepickerValue }}'</p>
    </div>

    <div>
      <!-- Styled -->
      <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      />
      <div class="mt-3">
        Selected file: {{ file1 ? file1.name : '' }}
      </div>

      <!-- Plain mode -->
      <b-form-file v-model="file2" class="mt-3" plain />
      <div class="mt-3">
        Selected file: {{ file2 ? file2.name : '' }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      MODE: '',
      breadcrumbItems: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ],
      calendarValue: '',
      calendarContext: null,
      userId: '',
      status: 'not_accepted',
      datepickerValue: '',
      file1: null,
      file2: null
    }
  },
  computed: {
    validation () {
      return this.userId.length > 4 && this.userId.length < 13
    }
  },
  mounted () {
    this.MODE = process.env.MODE
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    onContext (ctx) {
      this.calendarContext = ctx
    }
  },
  css: [
    '@/assets/css/carousel.css'
  ]
}
</script>
