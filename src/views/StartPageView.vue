<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="start">
    <h1>This is my Startpage</h1>
    <p>I will move my old startpage here/make a new one</p>
    <RouterLink to="/" @click="this.$emit('show', true)" >Click on me to go back</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .start {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
