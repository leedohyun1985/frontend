<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
          BootstrapVue
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">
            Address
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="mx-auto col-sm-8">
          <b-input-group>
            <template #prepend>
              <b-dropdown text="All">
                <b-dropdown-item>Action A</b-dropdown-item>
                <b-dropdown-item>Action B</b-dropdown-item>
              </b-dropdown>
            </template>

            <b-form-input placeholder="검색어를 입력하세요." type="search" />

            <template #append>
              <b-input-group-text>
                <b-icon-search />
              </b-input-group-text>
            </template>
          </b-input-group>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ES
            </b-dropdown-item>
            <b-dropdown-item href="#">
              RU
            </b-dropdown-item>
            <b-dropdown-item href="#">
              FA
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav>
            <b-nav-item href="#">
              Returns & Order
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      leftSideMenu: [
        { name: 'TV상품', index: 1, depth: 1, link: 'https://bootstrap-vue.org/docs/components/navbar', icon: '' },
        { name: '패션의류/속옷', index: 2, depth: 1, link: 'https://kr.vuejs.org/v2/guide/list.html', icon: '' },
        { name: '패션잡화', index: 3, depth: 1, link: 'https://eslint.vuejs.org/rules/valid-v-for.html', icon: '' },
        { name: '뷰티', index: 4, depth: 1, link: '', icon: '' },
        { name: '스포츠/레저', index: 5, depth: 1, link: '', icon: '' },
        { name: '식품', index: 6, depth: 1, link: '', icon: '' },
        { name: '출산/유아동', index: 7, depth: 1, link: '', icon: '' },
        { name: '가구/침구/홈데코', index: 8, depth: 1, link: '', icon: '' },
        { name: '생활/주방', index: 9, depth: 1, link: '', icon: '' },
        { name: '가전/디지털', index: 10, depth: 1, link: '', icon: '' },
        { name: '반려/도서/취미', index: 11, depth: 1, link: '', icon: '' },
        { name: '여행/티켓/보험', index: 12, depth: 1, link: '', icon: '' },
        { name: '렌탈샵', index: 13, depth: 1, link: '', icon: '' },
        { name: '백화점', index: 14, depth: 1, link: '', icon: '' },
        { name: '테마관', index: 15, depth: 1, link: '', icon: '' },
        { name: '파트너스', index: 16, depth: 1, link: '', icon: '' }
      ]
    }
  },
  mounted () {
  },
  methods: {

  },
  css: [
    '@/assets/css/carousel.css'
  ]
}
</script>
