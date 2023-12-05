<template>
  <div style="border:1px #000 solid">
    <h4> {{ dataObj.a }} </h4>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    dataObj: Object,
  })
</script>