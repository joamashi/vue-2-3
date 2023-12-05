<template>
  <div class="scroll-behavior">
    <ul class="tab-menu">
      <li
        v-for="(item, index) in items"
        :key="index"
        ><a :href="`#tab${index}`">TEXT {{ index }}</a></li>
    </ul>

    <section 
      v-for="(item, index) in items"
      :key="index"
      :id="`#tab${index}`">
      test {{ index }}
    </section>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  
  const items = reactive([
    {

    },
    {

    },
    {

    },
    {

    },
  ])

  const tab = (index) => {
    console.log(index)
  }
</script>

<style>
html {
  scroll-behavior: smooth;
}
.v-main {
  display: block !important;
}
.scroll-behavior {}

.tab-menu { display: flex;}
.tab-menu li { width: 100%; border: 1px #000 solid;}
.tab-menu li button { padding: 1rem; text-align: center; width: 100%;}

.scroll-behavior section {
  height: 100vh;
}
</style>