<template>
  <main>
    <div>
      <b-card no-body>
        <b-tabs
          card
          fill
          active-nav-item-class="font-weight-bold text-uppercase text-dark"
          active-tab-class="font-weight-bold text-dark"
        >
          <b-tab
            v-for="(theme, themeIndex) in fixMainTheme"
            :key="themeIndex"
            :title="theme.themeNm"
          >
            <b-card-group deck>
              <b-card
                v-for="(item, index) in theme.itemList"
                :key="index"
                :img-src="'https://image.homeplus.kr/it/' + item.itemNo + 's0374'"
                img-alt="item.itemNm"
                img-top
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-form-rating v-model="item.grade" readonly stars="5" show-value />
                <b-badge v-if="item.recomMsg" variant="danger">
                  {{ item.recomMsg }}
                </b-badge>
                <b-card-text>
                  {{ item.itemNm }}
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <!-- <div>
      <b-card
        v-for="(item, index) in itemList"
        :key="index"
        :img-src="'https://image.homeplus.kr/it/' + item.itemNo + 's0374'"
        img-alt="item.itemNm"
        img-top
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-form-rating v-model="item.grade" readonly stars="5" show-value />
        <b-badge v-if="item.recomMsg" variant="danger">
          {{ item.recomMsg }}
        </b-badge>
        <b-card-text>
          {{ item.itemNm }}
        </b-card-text>
      </b-card>
    </div> -->
  </main>
</template>

<script>
export default {
  data () {
    return {
      lionMainTheme: [],
      fixMainTheme: [],
      itemList: []
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
      // console.log(jsonList)
      // console.log(jsonList.data[0])
      // console.log(jsonList.data[1])
      this.lionMainTheme = jsonList.data[0].lionMainTheme
      this.fixMainTheme = jsonList.data[1].fixMainTheme
      console.log(this.lionMainTheme[0].itemList)
      this.itemList = this.lionMainTheme[0].itemList
      // console.log(this.fixMainTheme)
      this.itemList.forEach((element) => {
        console.log(element.itemNm)
      })
    }
  },
  css: [
    '@/assets/css/carousel.css'
  ]
}
</script>
