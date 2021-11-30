<template>
  <main>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
      <b-alert show variant="primary">
        <a href="#" class="alert-link">Primary Alert</a>
      </b-alert>
      <b-alert show variant="secondary">
        <a href="#" class="alert-link">Secondary Alert</a>
      </b-alert>
      <b-alert show variant="success">
        <a href="#" class="alert-link">Success Alert</a>
      </b-alert>
      <b-alert show variant="danger">
        <a href="#" class="alert-link">Danger Alert</a>
      </b-alert>
      <b-alert show variant="warning">
        <a href="#" class="alert-link">Warning Alert</a>
      </b-alert>
      <b-alert show variant="info">
        <a href="#" class="alert-link">Info Alert</a>
      </b-alert>
      <b-alert show variant="light">
        <a href="#" class="alert-link">Light Alert</a>
      </b-alert>
      <b-alert show variant="dark">
        <a href="#" class="alert-link">Dark Alert</a>
      </b-alert>
    </div>
    <div>
      <b-alert show dismissible>
        Dismissible Alert! Click the close button over there <b>&rArr;</b>
      </b-alert>
    </div>
    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        This alert will dismiss after {{ dismissCountDown }} seconds...
      </b-alert>
      <b-button variant="info" class="m-1" @click="showAlert">
        Show alert with count-down timer
      </b-button>
    </div>
    <div>
      <b-alert show dismissible fade>
        Dismissible Alert!
      </b-alert>

      <b-alert
        variant="danger"
        dismissible
        fade
        :show="showDismissibleAlert"
        @dismissed="showDismissibleAlert=false"
      >
        Dismissible Alert!
      </b-alert>

      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="warning"
        @dismiss-count-down="countDownChanged"
      >
        This alert will dismiss after {{ dismissCountDown }} seconds...
      </b-alert>

      <b-button variant="info" class="m-1" @click="showAlert">
        Show alert with count-down timer
      </b-button>
      <b-button variant="info" class="m-1" @click="showDismissibleAlert=true">
        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
      </b-button>
    </div>
    <div>
      <b-form-group label="Aspect ratio" label-for="ratio" label-cols-md="auto" class="mb-3">
        <b-form-select id="ratio" v-model="aspect" :options="aspects" />
      </b-form-group>
      <b-card>
        <b-aspect :aspect="aspect">
          This will always be an aspect of "{{ aspect }}",
          except when the content is too tall.
        </b-aspect>
      </b-card>
    </div>
    <div>
      <p>Using stand-alone:</p><p />
      <div class="mb-4">
        <b-avatar />
        <b-avatar variant="primary" text="BV" />
        <b-avatar variant="info" src="https://placekitten.com/300/300" />
        <b-avatar variant="success" icon="people-fill" />
      </div>
      <p>Using in components (list group) example:</p><p />
      <b-list-group style="max-width: 300px;">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar class="mr-3" />
          <span class="mr-auto">J. Circlehead</span>
          <b-badge>5</b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="primary" text="BV" class="mr-3" />
          <span class="mr-auto">BootstrapVue</span>
          <b-badge>12</b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3" />
          <span class="mr-auto">Super Kitty</span>
          <b-badge>9</b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="success" icon="people-fill" class="mr-3" />
          <span class="mr-auto">ACME group</span>
          <b-badge>7</b-badge>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="mb-2">
      <b-avatar src="https://placekitten.com/300/300" />
      <b-avatar src="https://placekitten.com/300/300" size="6rem" />
    </div>
    <div class="mb-2">
      <b-avatar icon="people-fill" />
      <b-avatar icon="star-fill" />
      <b-avatar icon="music-note" />
      <b-avatar icon="star-fill" size="4em" />
    </div>
    <div class="mb-2">
      <b-avatar text="BV" />
      <b-avatar text="a" />
      <b-avatar text="Foo" />
      <b-avatar text="BV" size="4rem" />
    </div>

    <b-avatar><custom-icon /></b-avatar>

    <div class="mb-2">
      <b-avatar size="4em">
        Hello<br>World
      </b-avatar>
      <b-avatar size="4em">
        你好<br>世界
      </b-avatar>
    </div>

    <div>
      <b-avatar variant="secondary" />
      <b-avatar variant="primary" />
      <b-avatar variant="dark" />
      <b-avatar variant="light" />
      <b-avatar variant="success" />
      <b-avatar variant="danger" />
      <b-avatar variant="warning" />
      <b-avatar variant="info" />
    </div>

    <div>
      <b-avatar />
      <b-avatar size="sm" />
      <b-avatar size="lg" />
      <b-avatar :size="24" />
      <b-avatar size="3em" />
      <b-avatar size="72px" />
    </div>

    <div>
      <b-avatar square />
    </div>

    <div>
      <b-avatar rounded="sm" />
      <b-avatar rounded />
      <b-avatar rounded="lg" />
      <b-avatar rounded="top" />
      <b-avatar rounded="left" />
      <b-avatar rounded="right" />
      <b-avatar rounded="bottom" />
    </div>

    <b-list-group>
      <b-list-group-item>
        <b-avatar button variant="primary" text="FF" class="align-baseline" @click="onAvatarClick" />
        Button Text Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar button src="https://placekitten.com/300/300" @click="onAvatarClick" />
        Button Image Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar button icon="star-fill" class="align-center" @click="onAvatarClick" />
        Button Icon Avatar
      </b-list-group-item>
    </b-list-group>

    <b-list-group>
      <b-list-group-item>
        <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline" />
        Link Text Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar href="#bar" src="https://placekitten.com/300/300" />
        Link Image Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar href="#baz" icon="star-fill" class="align-center" />
        Link Icon Avatar
      </b-list-group-item>
    </b-list-group>

    <div>
      <b-avatar badge />
      <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300" />
      <b-avatar badge badge-variant="warning" icon="people-fill" />
      <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300" />
      <b-avatar badge badge-variant="dark" text="BV" />
      <b-avatar square badge badge-variant="dark" text="BV" />
    </div>

    <div>
      <b-avatar badge="BV" />
      <b-avatar badge="7" variant="primary" badge-variant="dark" />
      <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
        <template #badge>
          <b-icon icon="star-fill" />
        </template>
      </b-avatar>
    </div>

    <div>
      <b-avatar badge />
      <b-avatar badge badge-left />
      <b-avatar badge badge-top />
      <b-avatar badge badge-left badge-top />
    </div>

    <div>
      <b-avatar badge />
      <b-avatar badge badge-offset="-0.5em" />
      <b-avatar badge badge-offset="-2px" />
      <b-avatar badge badge-offset="2px" />
      <b-avatar badge badge-top />
      <b-avatar badge badge-top badge-offset="-0.5em" />
      <b-avatar badge badge-top badge-offset="-2px" />
      <b-avatar badge badge-top badge-offset="2px" />
    </div>

    <div>
      <b-avatar-group size="60px">
        <b-avatar />
        <b-avatar text="BV" variant="primary" />
        <b-avatar src="https://placekitten.com/300/300" variant="info" />
        <b-avatar text="OK" variant="danger" />
        <b-avatar variant="warning" />
        <b-avatar src="https://placekitten.com/320/320" variant="dark" />
        <b-avatar icon="music-note" variant="success" />
      </b-avatar-group>
    </div>

    <div>
      <b-avatar-group size="5rem">
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
      </b-avatar-group>
    </div>

    <div>
      <b-avatar-group variant="success">
        <b-avatar />
        <b-avatar variant="info" />
        <b-avatar />
        <b-avatar />
        <b-avatar />
      </b-avatar-group>
    </div>

    <div>
      <b-avatar-group rounded="lg">
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
      </b-avatar-group>
    </div>

    <div>
      <b-avatar-group overlap="0.65">
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
        <b-avatar />
      </b-avatar-group>
    </div>

    <div>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
    </div>

    <div class="text-center">
      <b-button variant="primary">
        Notifications <b-badge variant="light">
          4
        </b-badge>
      </b-button>
    </div>

    <div class="text-center">
      <b-button variant="primary">
        Profile
        <b-badge variant="light">
          9 <span class="sr-only">unread messages</span>
        </b-badge>
      </b-button>
    </div>

    <div>
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
    </div>

    <div>
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
    </div>

    <div>
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
    </div>

    <b-breadcrumb :items="breadcrumbitems" />

    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">
        Foo
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">
        Bar
      </b-breadcrumb-item>
      <b-breadcrumb-item active>
        Baz
      </b-breadcrumb-item>
    </b-breadcrumb>

    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">
        Button
      </b-button>
      <b-button variant="success">
        Button
      </b-button>
      <b-button variant="outline-primary">
        Button
      </b-button>
    </div>

    <div>
      <b-button>I am a Button</b-button>
      <b-button href="#">
        I am a Link
      </b-button>
    </div>

    <b-row>
      <b-col lg="4" class="pb-2">
        <b-button size="sm">
          Small Button
        </b-button>
      </b-col>
      <b-col lg="4" class="pb-2">
        <b-button>Default Button</b-button>
      </b-col>
      <b-col lg="4" class="pb-2">
        <b-button size="lg">
          Large Button
        </b-button>
      </b-col>
    </b-row>

    <div>
      <b-button variant="primary">
        Primary
      </b-button>
      <b-button variant="secondary">
        Secondary
      </b-button>
      <b-button variant="success">
        Success
      </b-button>
      <b-button variant="danger">
        Danger
      </b-button>
      <b-button variant="warning">
        Warning
      </b-button>
      <b-button variant="info">
        Info
      </b-button>
      <b-button variant="light">
        Light
      </b-button>
      <b-button variant="dark">
        Dark
      </b-button>
    </div>

    <div>
      <b-button variant="outline-primary">
        Primary
      </b-button>
      <b-button variant="outline-secondary">
        Secondary
      </b-button>
      <b-button variant="outline-success">
        Success
      </b-button>
      <b-button variant="outline-danger">
        Danger
      </b-button>
      <b-button variant="outline-warning">
        Warning
      </b-button>
      <b-button variant="outline-info">
        Info
      </b-button>
      <b-button variant="outline-light">
        Light
      </b-button>
      <b-button variant="outline-dark">
        Dark
      </b-button>
    </div>

    <div>
      <b-button variant="link">
        Link
      </b-button>
    </div>

    <div>
      <b-button block variant="primary">
        Block Level Button
      </b-button>
    </div>

    <div>
      <b-button pill>
        Button
      </b-button>
      <b-button pill variant="primary">
        Button
      </b-button>
      <b-button pill variant="outline-secondary">
        Button
      </b-button>
      <b-button pill variant="success">
        Button
      </b-button>
      <b-button pill variant="outline-danger">
        Button
      </b-button>
      <b-button pill variant="info">
        Button
      </b-button>
    </div>

    <div>
      <b-button squared>
        Button
      </b-button>
      <b-button squared variant="primary">
        Button
      </b-button>
      <b-button squared variant="outline-secondary">
        Button
      </b-button>
      <b-button squared variant="success">
        Button
      </b-button>
      <b-button squared variant="outline-danger">
        Button
      </b-button>
      <b-button squared variant="info">
        Button
      </b-button>
    </div>

    <div>
      <b-button disabled size="lg" variant="primary">
        Disabled
      </b-button>
      <b-button disabled size="lg">
        Also Disabled
      </b-button>
    </div>

    <div>
      <h5>Pressed and un-pressed state</h5>
      <b-button :pressed="true" variant="success">
        Always Pressed
      </b-button>
      <b-button :pressed="false" variant="success">
        Not Pressed
      </b-button>

      <h5 class="mt-3">
        Toggleable Button
      </h5>
      <b-button :pressed.sync="myToggle" variant="primary">
        Toggle Me
      </b-button>
      <p>Pressed State: <strong>{{ myToggle }}</strong></p>

      <h5>In a button group</h5>
      <b-button-group size="sm">
        <b-button
          v-for="(btn, idx) in buttons"
          :key="idx"
          :pressed.sync="btn.state"
          variant="primary"
        >
          {{ btn.caption }}
        </b-button>
      </b-button-group>
      <p>Pressed States: <strong>{{ btnStates }}</strong></p>
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
      aspect: '16:9',
      aspects: [
        { text: '4:3 (SD)', value: '4:3' },
        { text: '1:1 (Square)', value: '1:1' },
        { text: '16:9 (HD)', value: '16:9' },
        { text: '1.85:1 (Widescreen)', value: '1.85:1' },
        { text: '2:1 (Univisium/Superscope)', value: '2:1' },
        { text: '21:9 (Anamorphic)', value: '21:9' },
        { text: '1.43:1 (IMAX)', value: '1.43:1' },
        { text: '3:2 (35mm Film)', value: '3:2' },
        { text: '3:1 (APS-P)', value: '3:1' },
        { text: '4/3 (Same as 4:3)', value: 4 / 3 },
        { text: '16/9 (Same as 16:9)', value: 16 / 9 },
        { text: '3 (Same as 3:1)', value: 3 },
        { text: '2 (Same as 2:1)', value: 2 },
        { text: '1.85 (Same as 1.85:1)', value: 1.85 },
        { text: '1.5', value: 1.5 },
        { text: '1 (Same as 1:1)', value: 1 }
      ],
      breadcrumbitems: [
        {
          text: 'Home',
          href: 'https://google.com'
        },
        {
          text: 'Posts',
          to: { name: 'home' }
        },
        {
          text: 'Another Story',
          active: true
        }
      ],
      myToggle: false,
      buttons: [
        { caption: 'Toggle 1', state: true },
        { caption: 'Toggle 2', state: false },
        { caption: 'Toggle 3', state: true },
        { caption: 'Toggle 4', state: false }
      ]
    }
  },
  computed: {
    btnStates () {
      return this.buttons.map(btn => btn.state)
    }
  },
  mounted () {

  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    onAvatarClick () {
      this.$bvModal.msgBoxOk('User name: Fred Flintstone', {
        title: 'User Info',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0'
      })
    }
  },
  css: [
    '@/assets/css/carousel.css'
  ]
}
</script>
