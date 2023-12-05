<template>
  사용자
  <h1>{{ jkljlkjkl }}</h1>
  <h1>{{ dataAge }}</h1>
  <h1>{{ dataObj.a }}</h1>

  <h1>{{ dataTrue }}</h1>

  <v-btn @click="emit('onCount', ++jkljlkjkl)">버튼</v-btn>
  <v-btn @click="dataTrue = !dataTrue">dataTrue</v-btn>

  <slot />
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    dataTrue: Boolean,
    jkljlkjkl: Number,
    dataAge: {
      type: Number,
      default: 20,
      // required: true  
    },

    dataObj: Object
  })

  const emit = defineEmits([
    'onCount'
  ])
</script>