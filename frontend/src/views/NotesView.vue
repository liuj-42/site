<template>
  
  <div class="notes" v-if="ready">
     <template v-for="(lecture, index) in lectures">
        <Markdown v-show="lecNum==index" :source="lecture" />
        <!-- <p v-show="lecNum==index" >lecture {{index}}</p>
        <p>{{lecture}}</p> -->
     </template>
  </div>
</template>


<script>
import Markdown from 'vue3-markdown-it';
// import 'highlight.js/styles/monkai.css';
import axios from 'axios';


export default {
  components: {
    Markdown
  },
  async mounted() {
    let lectureNumbers = [];

    let lectures = await axios.get( "https://liuj-42.herokuapp.com/lectures" );
    // console.log(lectures.data)
    lectures.data.forEach( async ( lectureNum ) => {
      lectureNumbers.push( lectureNum);
      let content = await axios.get( `https://liuj-42.herokuapp.com/lectures/${lectureNum}` );
      console.log("content: " );
      console.log( content );
      this.lectures.push(content.data[0])
    })
    this.ready = true;

    // await axios
    //   .get( "https://liuj-42.herokuapp.com/lectures" )
    //   .then( ( lectures ) =>  {
    //     lectures = lectures.data;
    //     // console.log(lectures)
    //     // console.log( `there are ${lectures.length} lectures` )
    //     lectures.forEach( ( lecture ) => {
    //       lectureNumbers.push( lecture );
    //        axios
    //         .get( `https://liuj-42.herokuapp.com/lectures/${lecture}` )
    //         .then( ( content ) => {
    //           console.log(content.data)
    //           this.lectures.push(content.data[0]);
    //           console.log(this.lectures)
    //         });

    //     });
    //     this.lecNum = lectures.length;
    //     // console.log( lectureNumbers );
    //     // console.log( JSON.stringify( lectureNumbers ) );
    //     this.$emit( "gotLectures", lectureNumbers );

    //   })
    //   // console.log("emitting")
    //   console.log("content:")
    //   console.log(this.lectures)

  },
  data() {
    return {
      lectures: [`# This is where my Opsys notes will be.`],
      ready: false,
      lecNum: 1,
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