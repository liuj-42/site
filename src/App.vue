<script>
export default {
  mounted() {
    if (this.$route.name != "home") {
      this.hideNotes();
    } else {
      this.showNotes();
    }
  },
  data() {
    return {
      show: true,
      notes: false,
      options: ['1', '2'],
      lecNum: 0,
    }
  },
  methods: {
    showNotes() {
      this.show = false;
      this.notes = true;
    },
    hideNotes() {
      this.show = true;
      this.notes = false;
    },
    showLecture(num) {
      this.lecNum = parseInt(num);
    }
  }
}
</script>


<template>

  <header v-if="show">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">James Liu</h1>
        <h3>
          Some text about me goes here
        </h3>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </nav>
    </div>
  </header>

  <header v-if="notes">
    <RouterLink to="/"><img alt="Vue logo" class="logo clickable" style="margin: 0 auto" src="@/assets/logo.svg" width="125" height="125"
        @click="hideNotes()"/></RouterLink>
    <span class="logo"></span>

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Notes</h1>
        <h3>
          These are my notes for Opsys, organized by lecture number.
        </h3>
      </div>

      <LectureSelect :options="[1, 2, 3, 4, 5]" @lectureSelect="showLecture"></LectureSelect>

    </div>
  </header>

  <RouterView @hide="this.show = false" @show="this.show = true" @notes="showNotes()" :lecNum="lecNum" />
</template>

<style>

@import '@/assets/base.css';

.clickable {
  cursor: pointer;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}



a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
<style scoped>
@import "../node_modules/vue-select/dist/vue-select.css";
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LectureSelect from './components/LectureSelect.vue';

</script>