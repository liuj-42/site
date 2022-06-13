<script setup>
import { RouterLink } from 'vue-router';
</script>

<!-- TODO: make the dropdown menu remember which lecture has been selected -->

<template>
<div class="dropdown">
  <span @click="test()">Select lecture number</span>  <!-- TODO: add a down caret icon-->
  <ul class="nostyle dropdown-select">
    <li v-for="option in options" class="dropdown-item" :id="option" ref="option" @click="show(option)">
      {{option}}
    </li>
  </ul>

</div>

</template>

<script>
export default {
  data() {
    return {
      selected: 0,
    }
  },
  mounted() {
    this.show(this.selected)
  },
  props: {
    'options' : Array
  },
  // watch: {
  //   options: () => { works
  //     console.log("options has changed")
  //   }
  // },
  methods: {
    test() {
      console.log(this.options)
    },
    show(id) {
      console.log("showing lecture number " + id);
      this.options.forEach(option => {
        if (option != id) {
          this.$refs.option[this.options.indexOf(option)].classList.remove("active");
        } else {
          this.$refs.option[this.options.indexOf(option)].classList.add("active");
        }
      })
      this.$emit("lectureSelect", id);
    }
  }
}
</script>

<style scoped>
.nostyle {
  list-style: none;
}

.dropdown-select {
  display: none;
  position: absolute;
  min-width: 100%;
  padding: 0;

}

.dropdown-item {
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  cursor: pointer;
  min-width: 100%;
  border-bottom: 1px solid grey;
  /* margin-left: 10%; */
}


.active {
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}


.dropdown-item:hover {
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown {
  cursor: pointer;
  min-width: fit-content;
}

.dropdown:hover .dropdown-select {
  display: block;
}


</style>