<!-- <script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue';
</script>
<script>
export default {
  methods: {
    debug (event) {
      console.log(event);
    },
    hide() {
      this.$emit("hide");
    },
    show() {
      this.$emit("show");
    }
  }
}
</script>

<template>
<main>
  <TheWelcome/>
</main>


</template>


<style scoped>

</style> -->


<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<script>
export default {
  methods: {
    debug(event) {
      console.log(event);
    },
    hide() {
      this.$emit("hide");
    },
    show() {
      this.$emit("show");
    }
  }
}
</script>
<template>
  <div>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Opsys Notes</template>
      <RouterLink to="/notes">Click here</RouterLink>
      to view my notes for CSCI 4210.

    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Startpage</template>
      <RouterLink to="/start" @click="hide()" @show="show()">Click here</RouterLink>
      to go to my startpage.
    </WelcomeItem>
  </div>


</template>
