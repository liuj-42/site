<template>
  
  <div class="notes" v-if="ready">
     <template v-for="(lecture, index) in lectures">
        <Markdown v-if="lecNum==index" :source="lecture" />
     </template>
  </div>
</template>


<script>
import Markdown from 'vue3-markdown-it';
// import 'highlight.js/styles/monkai.css';


export default {
  components: {
    Markdown
  },
  props: {
    lecNum: {type: Number}
  },
  data() {
    return {
      lectures: [`# This is where my Opsys notes will be.
This is another line`, ' # lecture 1', '# lecture 2', `# lecture 3`],
      ready: true,
      plugins : [
        {
          plugin: 'markdown-it-highlightjs',
        }
      ],
    }
  },
  methods: {
    showLec() {
      console.log(this.lecNum);
    },
    getNotes(num) {
      this.lectures = ["this is something else"]
    },
    changeLecture(num) {
      this.lecNum = num;
    }
  }
}

</script>


<style>
@import '../../node_modules/highlight.js/styles/monokai.css';


@media (min-width: 1024px) {
  .notes {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>