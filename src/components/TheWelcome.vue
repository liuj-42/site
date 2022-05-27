<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
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
    <RouterLink to="/start">Click here</RouterLink>
    to view my notes for CSCI 4210.
  </WelcomeItem>

</template>
