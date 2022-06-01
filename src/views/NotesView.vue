<template>
  <div class="notes">
    <Markdown :source="source"/>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .notes {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
<script>
import Markdown from 'vue3-markdown-it';
export default {
  components: {
    Markdown
  },
  data() {
    return {
      source: '# Hello World!'
    }
  }
}

</script>
