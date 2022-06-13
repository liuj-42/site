<template>
  
  <div class="notes" v-if="ready">
     <template v-for="(lecture, index) in lectures">
        <Markdown v-show="lecNum==lectureNumbers[index-1]" :source="lecture" />
        <!-- <p v-show="lecNum==index" >lecture {{index}}</p>
        <p>{{lecture}}</p> -->
     </template>
  </div>
  <div class="notes" v-else>
    <Markdown source="# This is where my Opsys notes will be." />
  </div>
</template>


<script>
import Markdown from 'vue3-markdown-it';
// import 'highlight.js/styles/monkai.css';
import axios from 'axios';


export default {
  props: {
    'lecNum': Number
  },
  watch: {
    lecNum: function (newValue, oldValue) {
      // console.log(`new: ${newValue}\told: ${oldValue}`)
      this.ready = true;
    }
  },
  components: {
    Markdown
  },
  async mounted() { 

    // <!-- TODO: rewrite how the data is stored to make it into an object instead -->
    this.lectureNumbers = [];
    let lectures = await axios.get( "https://liuj-42.herokuapp.com/lectures" );
    lectures.data.forEach( async ( lectureNum ) => {
      this.lectureNumbers.push( lectureNum.slice( 0, -3 ) );
      let content = await axios.get( `https://liuj-42.herokuapp.com/lectures/${lectureNum}` );
      this.lectures.push(content.data)
    })
    // this.ready = true;
    this.$emit( "gotLectures", [2, 3, 4, 5] );
    
  },
  data() {
    return {
      lectures: [`# This is where my Opsys notes will be.`],
      ready: false,
      lectureNumbers: [0],
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