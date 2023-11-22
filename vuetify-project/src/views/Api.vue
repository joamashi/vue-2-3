<template>
  <div>
    <h1>API</h1>
    <div ref="el"></div>

    <button id="count" @click="count++">{{ count }}</button>
  </div>  
</template>

<script setup>
  import { 
    ref, 
    onMounted,
    onUpdated,
    onUnmounted 
  } from 'vue'

  const el = ref()
  onMounted(() => {
    console.log(el.value) // <div></div>
  })


  const count = ref(0)
  onUpdated(() => {
    console.log(document.getElementById('count').textContent)
  })


  let intervalId
  onMounted(() => {
    intervalId = setInterval(() => {
      // ...
    })
  })

  onUnmounted(() => clearInterval(intervalId))
</script>